function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)) {
        console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
        console.log(`Unexpected match for '${str}'`);
    }
}

// Test cases
verify(/c(a|a)t/, ["my car", "bad cats"], ["camper", "high art"]);
verify(/p(o|r)op/, ["pop culture", "mad props"], ["plop", "prrrop"]);
verify(/ferr(e?t|y|ari)/, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);
verify(/\b\w*ious\b/, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);
verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the period"]);
verify(/\b\w{7,}\b/, ["Siebentausenddreihundertzweiundzwanzig"], ["no", "three small words"]);
verify(/\b[^eE\s]+\b/, ["red platypus", "wobbling nest"], ["earth bed", "bedrøvet abe", "BEET"]);