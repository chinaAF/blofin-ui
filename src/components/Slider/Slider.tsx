import { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import useTheme from "../../provider/useTheme";
import { BUITheme } from "../../types/component";
import { cn } from "../../utils/utils";
import styles from "./slider.module.scss";
import {
  MarkLabelVariants,
  RailVariants,
  SliderActivityMarkVariants,
  SliderMarkVariants,
  SliderThumbVariants,
  SliderThumbVariantsDefault,
  SliderTooltipVariants,
  TrackVariants,
  TrackVariantsDefault
} from "./styles";

export interface SliderProps {
  /**
   * Value of the slider
   * @default 0
   */
  value: number;
  /**
   * @param value number
   * @returns void
   */
  onSliderChange: (value: number) => void;
  /**
   * @param value number
   * @returns void
   */
  onDragEnd?: (value: number) => void;
  /**
   * BUI theme
   */
  theme?: BUITheme;
  id?: string;
  /**
   * Minimum value of the slider
   * @default 0
   */
  min?: number;
  /**
   * Maximum value of the slider
   * @default 100
   */
  max?: number;
  /**
   * Step size
   * @default 1
   */
  step?: number;
  /**
   * Marks to show on the slider, in value units (not percent).
   * If not provided, will use [min, 25%, 50%, 75%, max] as default.
   */
  marks?: number[];
  /**
   * 指定显示 label 的 marks 值（不含重复）
   */
  labels?: number[];
  className?: string;
  /**
   * Render label for the slider
   * @param value number
   * @returns React.ReactNode
   */
  renderLabel?: (value: number) => React.ReactNode;
  disabled?: boolean;
}

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(val, max));
}

function getPercent(value: number, min: number, max: number, step?: number) {
  if (max === min) return 0;
  let percent = ((value - min) / (max - min)) * 100;
  if (typeof step === "number") {
    percent = Number(percent.toFixed(getDecimalPlaces(step)));
  }
  return percent;
}

function getDecimalPlaces(num: number) {
  const s = num.toString();
  if (s.indexOf(".") === -1) return 0;
  return s.split(".")[1].length;
}

function getValueFromPosition(
  clientX: number,
  min: number,
  max: number,
  railMin: number,
  railMax: number,
  step: number
) {
  if (railMax === railMin) return min;
  let percent = (clientX - railMin) / (railMax - railMin);
  percent = clamp(percent, 0, 1);
  let value = min + percent * (max - min);
  // Snap to step
  value = Math.round((value - min) / step) * step + min;
  value = Number(value.toFixed(getDecimalPlaces(step)));
  return clamp(value, min, max);
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>((props, ref) => {
  const {
    value,
    onSliderChange,
    onDragEnd,
    theme: mode,
    id,
    min = 0,
    max = 100,
    step = 1,
    marks = [25, 50, 75],
    labels = [0, 100],
    className,
    renderLabel = (value: number) => `${value}%`,
    disabled = false
  } = props;
  const { theme } = useTheme();

  const railRef = useRef<HTMLDivElement>(null);

  const marksArray = useMemo(() => {
    const num = Array.from(new Set(marks.concat([min, ...labels, max]))).sort((a, b) => a - b);
    const arr: { value: number; showLabel: boolean; showMark: boolean }[] = [];
    num.forEach((item) => {
      if (item >= min && item <= max) {
        arr.push({
          value: item,
          showLabel: labels.includes(item) || item === min || item === max,
          showMark: marks.includes(item) || item === min || item === max
        });
      }
    });
    return arr;
  }, [marks, min, max, step, labels]);

  const getMarkStyle = (markValue: number) => {
    return cn(
      SliderMarkVariants({ theme: mode || theme }),
      value >= markValue
        ? onMouseDown
          ? SliderActivityMarkVariants({ theme: mode || theme })
          : SliderThumbVariantsDefault({ theme: mode || theme })
        : ""
    );
  };

  // Helper to get the style for the thumb
  const getThumbStyle = () => {
    return onMouseDown
      ? cn(SliderThumbVariants({ theme: mode || theme }))
      : SliderThumbVariantsDefault({ theme: mode || theme });
  };

  // Helper to get the style for the track
  const getTrackStyle = () => {
    return onMouseDown
      ? cn(TrackVariants({ theme: mode || theme }))
      : TrackVariantsDefault({ theme: mode || theme, disabled });
  };

  const mouseDown = useRef<boolean>(false);
  const [onMouseDown, setMouseDonw] = useState(false);

  const handleDrag = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      const rect = railRef.current?.getBoundingClientRect();
      if (!rect) return;
      const { left: railMin, right: railMax } = rect;
      const newValue = getValueFromPosition(e.clientX, min, max, railMin, railMax, step);
      onSliderChange(newValue);
    },
    [min, max, step, onSliderChange]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (mouseDown.current) {
        handleDrag(e);
      }
    },
    [handleDrag]
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    (document.activeElement as HTMLElement).blur();

    mouseDown.current = true;
    setMouseDonw(true);

    document.addEventListener(
      "mouseup",
      () => {
        mouseDown.current = false;
        setMouseDonw(false);
        document.removeEventListener("mousemove", handleMouseMove);

        if (onDragEnd) {
          onDragEnd(value);
        }
      },
      { once: true }
    );

    document.addEventListener("mousemove", handleMouseMove);
  };

  const handleMarkClick = (e: React.MouseEvent<HTMLDivElement>, markValue: number) => {
    e.stopPropagation();
    onSliderChange(markValue);
    if (onDragEnd) {
      onDragEnd(markValue);
    }
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Simulate a drag event for click
    const rect = railRef.current?.getBoundingClientRect();
    if (!rect) return;
    const { left: railMin, right: railMax } = rect;
    const clientX = (e as any).clientX;
    const newValue = getValueFromPosition(clientX, min, max, railMin, railMax, step);
    onSliderChange(newValue);
    if (onDragEnd) {
      onDragEnd(newValue);
    }
  };

  // Calculate percent for value
  const percent = getPercent(value, min, max, step);

  return (
    <div
      id={id ? `${id}-slider-container` : ""}
      className={cn(styles["slider-container"], disabled && styles["disabled"], className)}>
      <div className={styles["slider-content"]}>
        <div
          ref={railRef}
          className={`${styles["rail"]} ${cn(RailVariants({ theme: mode || theme }))} rail`}></div>
        <div
          className={`${styles["track"]} ${getTrackStyle()} track`}
          style={{ width: `${percent}%` }}></div>
        <div
          id={id ? `${id}-mark-container` : ""}
          className={`${styles["mark-container"]} mark-container`}
          onClick={disabled ? undefined : handleContainerClick}>
          {marksArray.map((mark) => {
            const markPercent = getPercent(mark.value, min, max, step);
            return (
              <>
                {mark.showMark && (
                  <div
                    key={mark.value}
                    className={`${styles["mark"]} ${getMarkStyle(mark.value)} mark ${
                      mark.value <= value ? "mark-active" : ""
                    }`}
                    style={{ left: `${markPercent}%` }}
                    onClick={(e) => (disabled ? undefined : handleMarkClick(e, mark.value))}
                  />
                )}

                {mark.showLabel && (
                  <span
                    className={`${styles["mark-label"]} ${cn(
                      MarkLabelVariants({ theme: mode || theme })
                    )} mark-label`}
                    style={{ left: `${markPercent}%` }}>
                    {renderLabel(mark.value)}
                  </span>
                )}
              </>
            );
          })}
        </div>
        <div
          id={id ? `${id}-thumb-container` : ""}
          className={`${styles["thumb-container"]} thumb-container`}
          style={{
            left: `${percent}%`
          }}>
          <div
            className={`${styles["tooltip"]} ${cn(
              SliderTooltipVariants({ theme: mode || theme })
            )}`}>
            {renderLabel(value)}
          </div>
          <div
            id={id ? `${id}-thumb` : ""}
            className={`${styles["thumb"]} ${getThumbStyle()} thumb`}
            onMouseDown={disabled ? undefined : handleMouseDown}></div>
        </div>
      </div>
      <input type="hidden" value={value} ref={ref} />
    </div>
  );
});
