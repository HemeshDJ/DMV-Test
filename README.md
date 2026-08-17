# California DMV Practice Test

A browser-based study aid for the California Class C (car) and M1/M2 (motorcycle) knowledge tests. Questions are drawn from the [California Driver Handbook](https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/) and [California Motorcycle Handbook](https://www.dmv.ca.gov/portal/handbook/motorcycle-handbook/).

This is **not** affiliated with the California DMV and is not an official exam. Confirm current rules at [dmv.ca.gov](https://www.dmv.ca.gov/).

## Features

- Car (Class C) and motorcycle (M1/M2) question banks
- Practice lengths that match the real tests, plus shorter quizzes
- Shuffled questions and answer order each attempt
- Immediate feedback and an explanation after every answer
- Review of all answers when the test is over
- Keyboard shortcuts during a quiz: `1`–`4` or `A`–`D` to pick an option, `Enter` to continue
- No time limit and no build step — open the page and start

## Test modes

| License | Mode | Questions | Need to pass |
| --- | --- | --- | --- |
| Car (Class C) | Adult test | 36 | 30 |
| Car (Class C) | Under 18 | 46 | 38 |
| Car (Class C) | Quick practice | 20 | 16 |
| Motorcycle (M1/M2) | Knowledge test | 30 | 24 |
| Motorcycle (M1/M2) | Quick practice | 15 | 12 |

The car bank has about 340 questions; the motorcycle bank has about 90.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

Then visit the URL the command prints (usually `http://localhost:3000`).

## Project layout

| File | Role |
| --- | --- |
| `index.html` | Screens: start, quiz, results, review |
| `styles.css` | Layout and theme |
| `app.js` | Quiz flow, scoring, keyboard handling |
| `questions.js` | Class C question bank |
| `questions-extra.js`, `questions-extra-2.js`, `questions-extra-3.js` | Extra Class C questions (appended to the same bank) |
| `questions-motorcycle.js` | M1/M2 question bank |

## Adding questions

Each item looks like this:

```js
{
    category: "Speed limits",
    question: "Unless otherwise posted, the speed limit in a business or residential district is:",
    options: ["15 mph", "25 mph", "35 mph", "45 mph"],
    correct: 1,
    explanation: "The speed limit is 25 mph in business and residential districts unless a sign says otherwise."
}
```

`correct` is a zero-based index into `options`. Car questions go on `QUESTION_BANK` (or `QUESTION_BANK.push(...)` in an extra file). Motorcycle questions go on `MOTORCYCLE_BANK` in `questions-motorcycle.js`.
