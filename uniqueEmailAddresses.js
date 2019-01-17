const numUniqueEmails = emails => {
  const hash = {};
  for (let i = 0; i < emails.length; i++) {
    const formatted = formatEmailAddress(emails[i]);
    hash[formatted] = true;
  }
  return Object.keys(hash).length;
}

const formatEmailAddress = address => {
  const index = address.indexOf('@');
  const local = address.slice(0, index);
  const domain = address.slice(index);
  const sanitized = [];
  for (let i = 0; i < local.length; i++) {
    if (local[i] === '+') break;
    if (local[i] !== '.') sanitized.push(local[i]);
  }
  return `${sanitized.join('')}${domain}`;
}

// specification
// input: array of email addresses
// output: number of unique emails sent
// constraints: local names can have periods or plus signs that will be sent to the same email address
// edge cases:

// justification
// to find the unique number of emails sent given a list of email addresses

// explanation
// the format of the email addresses will determine the number of unique email addresses that received emails

// visualization

// approximation
// loop through email addresses and process them to find unique addresses
// use the at symbol to split address into local and domain name
// remove periods in local
// stop if a plus sign is encountered
// use hash to store valid email addresses
// count the number of keys in the hash and return it as the unique number

// verification

// implementation

const testInput = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];

console.log(numUniqueEmails(testInput)); // 2