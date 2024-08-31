// Sample log data
const logData = `
2024-08-28 14:32:01 - Error: User john_doe failed to login from IP 192.168.1.1
2024-08-28 14:35:45 - Error: User jane_smith failed to login from IP 10.0.0.2
`;

// Regex pattern to extract date, username, and IP address
const pattern = /(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) - Error: User (\w+) failed to login from IP (\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g;

// Find all matches in the log data
const matches = [...logData.matchAll(pattern)];

// Print extracted data
matches.forEach(match => {
    const [fullMatch, date, username, ip] = match;
    console.log(`Date: ${date}, Username: ${username}, IP Address: ${ip}`);
});

// Function to redact IP addresses
function redactIPs(log) {
    return log.replace(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g, '[REDACTED]');
}

// Redact IP addresses in the log data
const redactedLogData = redactIPs(logData);
console.log("\nModified Log Data:");
console.log(redactedLogData);