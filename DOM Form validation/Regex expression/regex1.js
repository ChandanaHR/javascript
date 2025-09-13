// What is regex: A sequence of characters that define a search pattern.
// const regex1 = /abc/; //matches abc
// const regex2 = new RegExp("abc"); //matches abc
// regex2.test("hjidef")

// 2. Metacharacters & Anchors
    // Anchors: matches the position in a String, not actually characters
    // 2a) ^ → Start of string / line
        // Matches if the pattern occurs at the beginning.
    // console.log(/^world/.test("Hello world"))
    // 2b) $ → End of string / line
    //     Matches if the pattern occurs at the end.
    // console.log(/jiu$/.test("Hello world"))

    //Metacharacters: Metacharacters are symbols with special meaning
    // 2c). Any single character (except newline by default)
    // console.log(/..at/.test("ueat"))
    // console.log(/.at/.test("at"))
    //2d. \ escape characters: actual symbol or character that is specified
    // console.log(/\./.test("a.b"));
    // console.log(/\?/.test("a?b"));
    // 2e) \d → Any digit [0-9]
    // console.log(/\d/.test("abc1"))
    //2f. \D → Any non-digit
    // console.log(/\D/.test("122"))
    //2g. \w → Word character [A-Za-z0-9_]
    // console.log(/\w/.test("#=@"))
    // 2h. \W → Non-word character
    // console.log(/\W/.test("hello1"))
    // 2i \s → Whitespace (space, tab, newline)
    // console.log(/\s/.test("helloworld"))
    // console.log(/\s/.test("hello\nworld"))
    // 2j. \S → Non-whitespace
    // console.log(/\S/.test("klgl"))
    // 2K. \b → Word boundary
    //     Matches position between word char and non-word char.
    // console.log(/\bcat\b/.test("cat"))
    // console.log(/\bcat/.test("catfish"))
    //2l. \B → Non-Word Boundary
        // Ensures the match happens inside a word (not at edges).
        // console.log(/\Bcat\B/.test("cat"))

//3. Quantifiers
    // 3a) * - 0 or more
    // Matches zero or more occurrences of the preceding character/group.
    // Works even if the character doesn’t exist at all.
    // console.log(/a*/.exec("auikke"))
    //3b) + - 1 or more
    // Matches at least one occurrence of the preceding character/group.
    // Must appear once or more.
    // console.log(/a+/.exec("caaake"))
    //3c) ? - 0 or 1
    // Matches zero or one occurrence.
    // Often used for optional characters.
    // Means “the preceding character (or group) may appear 0 or 1 time — but no more.”
    // console.log(/colou?r/.test("color")); //colo is fixed, u? should appear 0 or 1 time not more than 1 time, r should appear
    // console.log(/colou?r/.test("colour"));
    // console.log(/colou?r/.test("colorr"));
    // console.log(/^colou?r$/.test("colorr"))//color, colour
    //3d) {n} -> exact count
    // Matches the preceding character/group exactly n times.
    // console.log(/\d{3}/.exec("My pin: 1234"))
    // console.log(/\d{3}/.test("45"))
    //3e) {n,} -> atleast n times
    // console.log(/a{2,}/.exec("caaake"))
    // console.log(/a{2,}/.test("caake"))
    // console.log(/a{2,}/.exec("cake"))
    // console.log(/a{2,}/.test("cake"))
    // 3f . {n,m} -> between n and m
    // Matches the preceding character/group at least n times but not more than m.
    // console.log(/a{2,4}/.exec("caaake"))
    // console.log(/a{2,4}/.exec("cake"))

// 4. Character classes and groups in javascript
    // 4a) Square Brackets [ ] → Character Classes
    // Matches any one character inside the brackets.
    // console.log(/[abc]/.test("abc"))
    // console.log(/[def]/.test("abc"))
    // 4b) [^] Square brackets with ^
    // ^ inside brackets means NOT.
    // console.log(/[^abc]/.test("def"))
    // console.log(/[^abc]/.test("abc"))
    // 4c).[startrange-endrange]
    // Matches a range of characters (lowercase letters).
    // console.log(/[a-d]/.test("a"))
    // console.log(/[a-zA-Z0-9]/.test("9"))
    // 4d) Rounded brackets ()
    // Capturing group->Groups multiple characters together.
    // let match = (/(abc)/.exec("defabc"))
    // Here whole regex is "abc" and in my expression matched one is one "abc"
    // console.log(match[1])
    // let match1 = (/(ha)+/.exec("hahaha"))
    //Here the entire string that satisfied "hahaha"
    //"ha" the group's last match
    //If we remove + only one ha will be matched
    // console.log(match1[0]) //hahaha
    // console.log(match1[1])
    // 4e) Alternation | → OR
    // Works like “this OR that.”
    // Use inside groups for clarity.
    // console.log(/cat|dog/.test("I have lion"))
    //4f) named groups
        //normal by using match
        // const re = /(\d{3})-(\d{3})-(\d{4})/;
        // const match2 = "987-654-3210".match(re);

        // console.log(match2[1]); // "987"
        // console.log(match2[2]); // "654"
        // console.log(match2[3]); // "3210"
        //by assigning names and access it through groups
        // const re1 = /(?<area>\d{3})-(?<prefix>\d{3})-(?<line>\d{4})/;
        // const str = "987-654-3210";
        // const match3 = str.match(re1);
        // console.log(match3.groups.area);   // "987"
        // console.log(match3.groups.prefix); // "654"
        // console.log(match3.groups.line);   // "3210"

//5. Regex flags
// Regex flags are little switches you add to a 
// regular expression to change how it behaves
    // 5a) i-ignore case: Matches regardless of uppercase/lowercase.
    //    console.log(/cat/i.test("CAT"))
    //    5b) g-global search: Finds all matches, not just the first one.
    //    console.log("cat cat".match(/cat/g))
    //    console.log(/gat/g.test("cat cat"))
    //    5c) m → Multiline
    //     Makes ^ and $ match at the start and end of 
    //     each line, not just the whole string.
    // Lion tiger
    //world globe
    //hello world
        // console.log("tiger\nworld\nhello".match(/^hello/))
        // console.log("tiger\nworld\nhello".match(/^hello/m))
        // console.log("Lion tiger\nworld globe\nhello world".match(/globe$/))
        // console.log("Lion tiger\nworld globe\nhello world".match(/globe$/m))
            // 5d) s- Dotall: Lets . match newlines (\n) as well.
            // console.log(/a.b/.test("a\nb"))
            // console.log(/a.b/s.test("a\nb"))

// 6. String methods with regex 
    // 6a) match() - Returns the matched results 
    // let str7 = "cat bat rat";
    // console.log(str7.match(/at/)); 
    // 6b) matchAll() - Returns an iterator with detailed match objects
    // let str8 = "cat bat rat";
    // console.log(str8.matchAll(/(c|b|r)at/g))
    // for(let m of str8.matchAll(/(c|b|r)at/g)){
    //     console.log(m[0],m[1]) //m[0] full match, m[1] first capturing group
    // }
    // 6c) search():Returns the index of the first match (or -1 if not found). 
    // let str9 = "hello world world"
    // console.log(str9.search(/world/))
    // 6d) replace(): Replaces matches with something else. 
    // Supports regex and special replacement patterns
    // let str10 = "I love cats"
    // console.log(str10.replace(/cats/,"dogs"))
    // 6e) replaceAll(): Replaces all matches (like g flag).
    // let str11 = "a-b-c"
    // console.log(str11.replaceAll(/-/g,"@"))
    // 6f) split () :splits a string by regex
    // let str12 = "one,;two,;three"
    // console.log(str12.split(/[;]/))