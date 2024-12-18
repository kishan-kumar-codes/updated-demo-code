import { useState, useEffect } from "react";
import { differenceInDays } from "date-fns";

interface DateCalculations {
  daysBeforeDueDate: number | null;
  daysAfterDueDate: number | null;
}

export function useDateCalculations(
  dueDate: Date | null,
  beforeDate: Date | null,
  afterDate: Date | null
): DateCalculations {
  const [calculations, setCalculations] = useState<DateCalculations>({
    daysBeforeDueDate: null,
    daysAfterDueDate: null,
  });

  useEffect(() => {
    if (dueDate) {
      if (beforeDate) {
        const daysBefore = differenceInDays(dueDate, beforeDate);
        setCalculations((prev) => ({ ...prev, daysBeforeDueDate: daysBefore }));
      }
      if (afterDate) {
        const daysAfter = differenceInDays(afterDate, dueDate);
        setCalculations((prev) => ({ ...prev, daysAfterDueDate: daysAfter }));
      }
    }
  }, [dueDate, beforeDate, afterDate]);

  return calculations;
}
