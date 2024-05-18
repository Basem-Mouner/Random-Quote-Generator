// ************************100 qutes***************************************

var buffer;
var num1;
var num2;
var qutes;


qutes = [
    [
        "“Be yourself; everyone else is already taken.” <br/> ― Oscar Wilde",
        `“So many books, so little time.”<br/> ― Frank Zappa`,
        `“A room without books is like a body without a soul.”<br/>― Marcus Tullius Cicero”`,
        `“You only live once, but if you do it right, once is enough.”<br/>― Mae West`,
        `“Be the change that you wish to see in the world.”<br/>― Mahatma Gandhi`,
        `“In three words I can sum up everything I've learned about life: it goes on.”<br/>― Robert Frost`,
        `“If you tell the truth, you don't have to remember anything.”<br/>― Mark Twain`,
        `“A friend is someone who knows all about you and still loves you.” <br/>― Elbert Hubbard`,
        `“To live is the rarest thing in the world. Most people exist, that is all.”<br/>― Oscar Wilde`,
        `“Always forgive your enemies; nothing annoys them so much.”<br/>― Oscar Wilde`,
        `“Live as if you were to die tomorrow. Learn as if you were to live forever.”<br/>― Mahatma Gandhi`,
    ],
    [
        `“We accept the love we think we deserve.”<br/>― Stephen Chbosky`,
        `“Without music, life would be a mistake.”<br/>― Friedrich Nietzsche`,
        `“Insanity is doing the same thing, over and over again, but expecting different results.”<br/>― Narcotics Anonymous`,
        `“It is better to be hated for what you are than to be loved for what you are not.”<br/>― Andre Gide`,
        `“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”<br/>― Jane Austen`,
        `“It is our choices, Harry, that show what we truly are, far more than our abilities.”<br/>― J.K. Rowling`,
        `“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”<br/>― Marilyn Monroe`,
        `“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”<br/>― Albert Einstein`,
        `“It does not do to dwell on dreams and forget to live.”<br/>― J.K. Rowling`,
        `“Good friends, good books, and a sleepy conscience: this is the ideal life.”<br/> ― Mark Twain`,
        `“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”<br/>― John Green`,
    ],
    [
        `We are all in the gutter, but some of us are looking at the stars.”<br/>― Oscar Wilde`,
        `“The fool doth think he is wise, but the wise man knows himself to be a fool.”<br/>― William Shakespeare`,
        `“Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).”<br/> ― Mark Twain`,
        `“Life is what happens to us while we are making other plans.”<br/>― Allen Saunders`,
        `“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”<br/>― Bill Keane`,
        `“I have not failed. I've just found 10,000 ways that won't work.”<br/>― Thomas A. Edison`,
        `“It is not a lack of love, but a lack of friendship that makes unhappy marriages.”<br/>― Friedrich Nietzsche`,
        `“The man who does not read has no advantage over the man who cannot read.”<br/>― Mark Twain`,
        `“A woman is like a tea bag; you never know how strong it is until it's in hot water.”<br/>― Eleanor Roosevelt`,
        `“If you don't stand for something you will fall for anything.”<br/>― Gordon A. Eadie`,
        `“I solemnly swear that I am up to no good.”<br/>― J.K. Rowling`,
    ],
    [
        `“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”<br/>― Dr. Seuss`,
        `“A day without sunshine is like, you know, night.”<br/> ― Steve Martin`,
        `“A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.”<br/>― George R.R. Martin`,
        `“Never put off till tomorrow what may be done day after tomorrow just as well.”<br/>― Mark Twain`,
        `“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.”<br/> ― Lao Tzu`,
        `“That which does not kill us makes us stronger.”<br/>― Friedrich Nietzsche`,
        `“It is never too late to be what you might have been.”<br/>― George Eliot`,
        `“For every minute you are angry you lose sixty seconds of happiness.”<br/>― Ralph Waldo Emerson`,
        `“I love deadlines. I love the whooshing noise they make as they go by.”<br/> ― Douglas Adams,`,
        `“If you judge people, you have no time to love them.”<br/>― Mother Teresa`,
        `“I'm not upset that you lied to me, I'm upset that from now on I can't believe you.”<br/>― Friedrich Nietzsche`,
    ],
    [
        `
            “There is no greater agony than bearing an untold story inside you.”<br/> ― Maya Angelou`,
        `“If you can't explain it to a six year old, you don't understand it yourself.”<br/>― Albert Einstein`,
        `“Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.”<br/> ― Garrison Keillor`,
        `“Everything you can imagine is real.”<br/>― Pablo Picasso`,
        `“I have always imagined that Paradise will be a kind of library.”<br/>― Jorge Luis Borges`,
        `“Women and cats will do as they please, and men and dogs should relax and get used to the idea.”<br/> ― Robert A. Heinlein`,
        `“We don't see things as they are, we see them as we are.”<br/>― Anaïs Nin`,
        `“Sometimes the questions are complicated and the answers are simple.”<br/> ― Dr. Seuss`,
        `“You can never get a cup of tea large enough or a book long enough to suit me.”<br/>― C.S. Lewis`,
        `“We read to know we're not alone.”<br/>― William Nicholson,`,
        `“Never trust anyone who has not brought a book with them.”<br/>― Lemony Snicket,`,
    ],
    [
        `“Life isn't about finding yourself. Life is about creating yourself.”
            <br/>― George Bernard Shaw`,
        `“All you need is love. But a little chocolate now and then doesn't hurt.”
            <br/>― Charles M. Schulz`,
        `“Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.”
            <br/>― Jim Henson`,
        `“Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?”
            <br/>― J.K. Rowling,`,
        `“Today you are You, that is truer than true. There is no one alive who is Youer than You.”
            <br/>― Dr. Seuss,`,
        `“I'm not afraid of death; I just don't want to be there when it happens.”
            <br/> ― Woody Allen`,
        `“If one cannot enjoy reading a book over and over again, there is no use in reading it at all.”
            <br/>― Oscar Wilde`,
        `“To the well-organized mind, death is but the next great adventure.”
            <br/>― J.K. Rowling,`,
        `“Logic will get you from A to Z; imagination will get you everywhere.”
            <br/>― Albert Einstein`,
        `“Whenever I feel the need to exercise, I lie down until it goes away.”
            <br/>― Paul Terry`,
        `“Sometimes people are beautiful.
            Not in looks.
            Not in what they say.
            Just in what they are.”
            <br/>― Markus Zusak`,
    ],
    [
        `“The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.”
            <br/>― Bob Marley`,
        `“You don't get to choose if you get hurt in this world...but you do have some say in who hurts you. I like my choices.”
            <br/>― John Green`,
        `“Folks are usually about as happy as they make their minds up to be.”
            <br/>― Abraham Lincoln`,
        `“The more that you read, the more things you will know. The more that you learn, the more places you'll go.”
            <br/>― Dr. Seuss`,
        `“Do what you can, with what you have, where you are.”
            <br/> ― Theodore Roosevelt`,
        `“There is no friend as loyal as a book.”
            <br/>― Ernest Hemingway`,
        `“Success is not final, failure is not fatal: it is the courage to continue that counts.”
            <br/>― Winston S. Churchill`,
        `“One good thing about music, when it hits you, you feel no pain.”
            <br/>― Bob Marley`,
        `“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.”
            <br/>― Groucho Marx`,
        `“Love is like the wind, you can't see it but you can feel it.”
            <br/>― Nicholas Sparks`,
        `“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”
            <br/>― Helen Keller`,
    ],
    [
        `“So, this is my life. And I want you to know that I am both happy and sad and I'm still trying to figure out how that could be.”
           <br/> ― Stephen Chbosky,`,
        `“Neil McNair has become my alarm clock, if alarm clocks had
            freckles and knew all your insecurities.”
            <br/> ― Rachel Lynn Solomon`,
        `“You wrote a fucking book. Do you know how many people
            wish they could do that, or how many people talk about doing it
            and never do?”
            <br/> ― Rachel Lynn Solomon`,
        `“One part brave, three parts fool.”
            <br/>― Christopher Paolini,`,
        `“Everyone ripens at their own speed.”
            <br/>― Maya Realm,`,
        `“To some I seem crazy, that's ok. They seem crazy to me as well.”
            <br/> ― Maya Realm,`,
        `“Strength, courage and fire to pursue the unknown.”
            <br/>― Maya Realm,`,
        `“It is not hard, it is not easy — IT IS.”
            <br/> ― Maya Realm,`,
        `“Whatever one can do by oneself, one must do it — for oneself.”
            <br/> ― Maya Realm,`,
        `“We hurt ourselves much more than others can ever hurt us.”
            <br/> ― Maya Realm,`,
        `“The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.”
            <br/>― Marilyn Monroe`,
    ],
    [
        `“The only way out of the labyrinth of suffering is to forgive.”
            <br/>― John Green`,
        `“When someone loves you, the way they talk about you is different. You feel safe and comfortable.”
            <br/>― Jess C. Scott, `,
        `“Go to heaven for the climate and hell for the company.”
            <br/>― Benjamin Franklin Wade`,
        `“And, when you want something, all the universe conspires in helping you to achieve it.”
            <br/>― Paulo Coelho, `,
        `“The reason I talk to myself is because I’m the only one whose answers I accept.”
            <br/>― George Carlin`,
        `“Do not pity the dead, Harry. Pity the living, and, above all those who live without love.”
            <br/>― J.K. Rowling,`,
        `“He's like a drug for you, Bella.”
            <br/>― Stephenie Meyer, Eclipse`,
        `“The books that the world calls immoral are books that show the world its own shame.”
            <br/>― Oscar Wilde,`,
        `“There is nothing to writing. All you do is sit down at a typewriter and bleed.”
            <br/> ― Ernest Hemingway`,
        `“A wise girl kisses but doesn't love, listens but doesn't believe, and leaves before she is left.”
            <br/>― Marilyn Monroe`,
        `“′Classic′ - a book which people praise and don't read.”
            <br/>― Mark Twain`,
    ],
    [
        `“You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.”
            <br/>― John Lennon`,
        `“You don’t forget the face of the person who was your last hope.”
            <br/>― Suzanne Collins, `,
        `“I am good, but not an angel. I do sin, but I am not the devil. I am just a small girl in a big world trying to find someone to love.”
            <br/>― Marilyn Monroe`,
        `“I am free of all prejudice. I hate everyone equally. ”
            <br/>― W.C. Fields`,
        `“I love mankind ... it's people I can't stand!!”
            <br/>― Charles M. Schulz`,
        `“I have never let my schooling interfere with my education.”
            <br/>― Mark Twain`,
        `“The marks humans leave are too often scars.”
            <br/>― John Green,`,
        `“A lady's imagination is very rapid; it jumps from admiration to love, from love to matrimony in a moment.”
            <br/>― Jane Austen`,
        `“Remember, we're madly in love, so it's all right to kiss me anytime you feel like it.”
            <br/>― Suzanne Collins,`,
        `“Some day you will be old enough to start reading fairy tales again.”
            <br/>― C.S. Lewis`,
        `“We are what we pretend to be, so we must be careful about what we pretend to be.”
            <br/>― Kurt Vonnegut`,
    ],
    [
        `“To die will be an awfully big adventure.”
            <br/>― J.M. Barrie,`,
        `“And in that moment, I swear we were infinite.”
            <br/>― Stephen Chbosky,`,
        `“Books are a uniquely portable magic.”
            <br/> ― Stephen King,`,
        `“Anyone who has never made a mistake has never tried anything new.”
            <br/>― Albert Einstein`,
        `“It’s no use going back to yesterday, because I was a different person then.”
            <br/>― Lewis Carroll`,
        `“What a slut time is. She screws everybody.”
            <br/>― John Green,`,
        `“The truth is rarely pure and never simple.”
            <br/>― Oscar Wilde,`,
        `“But better to get hurt by the truth than comforted with a lie.”
            <br/> ― Khaled Hosseini`,
        `“... a mind needs books as a sword needs a whetstone, if it is to keep its edge.”
            <br/>― George R.R. Martin,`,
        `“There is nothing better than a friend, unless it is a friend with chocolate.”
            <br/>― Linda Grayson`,
        `“Memories warm you up from the inside. But they also tear you apart.”
            <br/>― Haruki Murakami,`,
    ]
];

function getRandomQutes() {
    while (true) {
        num1 = Math.round(Math.random() * 10);
        if (num1 != buffer) {
            num2 = Math.round(Math.random() * 10);
            document.getElementById('randMath').innerHTML = qutes[num1][num2];
            buffer = num1;
            // print index to check diffrent position
            console.log(num1, num2);
            break;
        }
    }
}



// ***************************************************************