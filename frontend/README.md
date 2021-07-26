Really wasn't able to make small commits throughout project, so will list my steps/thought process here

1. First thought was I needed some piece of UI for time input, which I assumed already existed.  Quick google search revealed the package react-time-picker, which I was happy with.  It's not very pretty, but for these purposes it does the job.

2. Implemented those to function, using their onChange prop

3. Once I was able to retrieve that data, I did some math to get the start time, bed time, and end time to spit out usable data

4. Wront calculate function to take in the above three variables, and multiply them by their respective hourly rates.

5. Ran calculate on useEffect to change the state of pay variable, which I then rendered on the page