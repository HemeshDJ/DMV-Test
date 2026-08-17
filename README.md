# California DMV Practice Test

An Expo app for studying the California Class C (car) and M1/M2 (motorcycle) knowledge tests. Questions are drawn from the [California Driver Handbook](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/) and [California Motorcycle Handbook](https://www.dmv.ca.gov/portal/handbook/motorcycle-handbook/).

This is **not** affiliated with the California DMV and is not an official exam. Confirm current rules at [dmv.ca.gov](https://www.dmv.ca.gov/).

## Features

- Car (Class C) and motorcycle (M1/M2) question banks
- Practice lengths that match the real tests, plus shorter quizzes
- Shuffled questions and answer order each attempt
- Immediate feedback and an explanation after every answer
- Review of all answers when the test is over
- Keyboard shortcuts on web during a quiz: `1`–`4` or `A`–`D` to pick an option, `Enter` to continue
- No time limit and no saved sessions — every launch starts fresh

## Test modes

| License | Mode | Questions | Need to pass |
| --- | --- | --- | --- |
| Car (Class C) | Adult test | 36 | 30 |
| Car (Class C) | Under 18 | 46 | 38 |
| Car (Class C) | Quick practice | 20 | 16 |
| Motorcycle (M1/M2) | Knowledge test | 30 | 24 |
| Motorcycle (M1/M2) | Quick practice | 15 | 12 |

The car bank has 353 questions; the motorcycle bank has 94.

## Run it

```bash
npm install
npx expo start
```

On Windows PowerShell, if `npx` is blocked by the execution policy, use the `.cmd` shim instead:

```powershell
npx.cmd expo start
```

Then press `w` for web, or scan the QR code with Expo Go. To open web directly:

```bash
npm run web
```

If `npm` is blocked the same way, use `npm.cmd run web`.

## Project layout

| Path | Role |
| --- | --- |
| `src/app/index.tsx` | Start, quiz, results, and review screens |
| `src/app/privacy.tsx` | On-device privacy policy |
| `src/lib/quiz.ts` | Shuffle, scoring, and pass/fail rules |
| `src/constants/questions-car.ts` | Class C question bank |
| `src/constants/questions-motorcycle.ts` | M1/M2 question bank |
| `src/constants/modes.ts` | License types and test lengths |

## Adding questions

Each item looks like this:

```ts
{
  category: "Speed limits",
  question: "Unless otherwise posted, the speed limit in a business or residential district is:",
  options: ["15 mph", "25 mph", "35 mph", "45 mph"],
  correct: 1,
  explanation: "The speed limit is 25 mph in business and residential districts unless a sign says otherwise."
}
```

`correct` is a zero-based index into `options`. Car questions go in `src/constants/questions-car.ts`. Motorcycle questions go in `src/constants/questions-motorcycle.ts`.
