# Calculate time right in Node REPL

This was meant to be [a web app](https://codepen.io/3rdp/pen/RJjqbq), but I'm too lazy to code click handlers and validate input values. Maybe one day...

## How does this work?

### Set up

Clone the repo.

```
git clone https://github.com/3rdp/time-calculate
```

Change directory.

```
cd time-calculate
```

Launch the repl.

```
node
```

Load the module.

```
.load time-calculator.js
```

### Adding time together

Create a variable. Save the new instance of Time Calculator into it.

```
const calc = new TimeCalculator({noticeTheBraces})
```

Check how much hours we have added up now. Enter this:

```
calc.hours
```

You'll see 0. Let's add up time you worked on a project during a week.

```
calc.add({ hours: 5, minutes: 20 })
```

You'll see this: `> {hours: 5, minutes: 20}` - Time Calculator has its values updated and it returns it to you. Go on, add the rest of the week.

```
...
```

You can Arrow Up ↑ to navigate through the history of your entered commands.
