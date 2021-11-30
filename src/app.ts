import darkmode from './darkmode';

declare global {
    interface Window { darkmode: any; }
}

window.darkmode = darkmode;
