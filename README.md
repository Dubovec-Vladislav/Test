// Везде
SELECT
  TO_CHAR(current_date, 'Month') AS month,
  CASE
    WHEN EXTRACT(MONTH FROM current_date) IN (1, 3, 5, 7, 8, 10, 12) THEN 31
    WHEN EXTRACT(MONTH FROM current_date) = 2 THEN
      CASE
        WHEN (EXTRACT(YEAR FROM current_date) % 4 = 0 AND EXTRACT(YEAR FROM current_date) % 100 != 0) OR (EXTRACT(YEAR FROM current_date) % 400 = 0) THEN 29
        ELSE 28
      END
    ELSE 30
  END AS days_in_month
FROM generate_series(1, 12);


// В MySQL можно так
SELECT
  MONTH(CURRENT_DATE) AS month,
  DAYOFMONTH(LAST_DAY(CURRENT_DATE)) AS days
FROM
  DUAL
