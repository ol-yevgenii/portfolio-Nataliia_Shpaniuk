export function siteLang() {
    const select = document.querySelector('select');
    const localLang = localStorage.getItem('langLocal');
    let locationHash = window.location.pathname + "#";
    const langArr = {
        "siteTitle": {
            "ua": "Портфоліо Наталія Шпанюк",
            "en": "Portfolio Natalia Shpanuk"
        },
        "about": {
            "ua": "Про мене",
            "en": "About"
        },
        "portfolio": {
            "ua": "Портфоліо",
            "en": "Portfolio"
        },
        "contacts": {
            "ua": "Контакти",
            "en": "Contacts"
        },
        "greetings": {
            "ua": "Привіт, Я",
            "en": "Hello, I'm"
        },
        "about_text": {
            "ua": "Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей, цуратись насолоди і вихваляти страждання, я розкрию перед вами всю картину і роз’ясню, що саме говорив цей чоловік, який відкрив істину, якого я б назвав зодчим щасливого життя. Дійсно, ніхто не відкидає, не зневажає, не уникає насолод тільки через те, що це насолоди, але лише через те, що тих, хто не вміє розумно вдаватися насолоді, осягають великі страждання. Так само як немає нікого, хто полюбивши, вважав за краще і зажадав би саме страждання тільки за те, що це страждання, а не тому, що інший раз виникають такі обставини, коли страждання і біль приносять якесь і чималу насолоду. Якщо скористатися найпростішим прикладом, то хто з нас став би займатися якими б то не було тяжкими фізичними вправами, якщо б це не приносило з собою якоїсь користі? І хто міг би по справедливості дорікнути прагнення до насолоди, яке не несло б з собою ніяких неприємностей, або того, хто уникав би такого страждання, яке не приносило б з собою ніякої насолоди?",
            "en": "I'm having a great time here in Sydney. The different sports are exciting, and there are lots of other exciting things too. For example the mascots are really great! They are called Olly, Syd and Millie. They are Australian ' animals and they are the symbols of the Sydney Games. The kookaburra is an Australian bird. She got her name, Olly, from the word 'Olympics'. She's a symbol of friendship and honesty. Then there's Syd (from Sydney). He's a platypus with a duck's nose. He's the symbol of the city of Sydney and its people. The third mascot is Millie. She's an Australian animal - an echidna. She's the symbol of the new millennium. So now I've got a mascot too. He's called Ozzie (from Aus­tralia) and he's a cute, cuddly koala."
        },
        "resume": {
            "ua": "резюме",
            "en": "resume"
        },
        "portfolio_title": {
            "ua": "Портфоліо",
            "en": "Portfolio"
        },
        "ukr24": {
            "ua": "Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей, цуратись насолоди і вихваляти страждання, я розкрию перед вами всю картину і роз’ясню, що саме говорив цей чоловік, який відкрив істину, якого я б назвав зодчим щасливого життя. Дійсно, ніхто не відкидає, не зневажає, не уникає насолод тільки через те, що це насолоди, але лише через те, що тих, хто не вміє розумно вдаватися насолоді, осягають великі страждання. Так само як немає нікого, хто полюбивши, вважав за краще і зажадав би саме страждання тільки за те, що це страждання, а не тому, що інший раз виникають такі обставини, коли страждання і біль приносять якесь і чималу насолоду. Якщо скористатися найпростішим прикладом, то хто з нас став би займатися якими б то не було тяжкими фізичними вправами, якщо б це не приносило з собою якоїсь користі? І хто міг би по справедливості дорікнути прагнення до насолоди, яке не несло б з собою ніяких неприємностей, або того, хто уникав би такого страждання, яке не приносило б з собою ніякої насолоди?",
            "en": "The USA is divided into 50 states and the District of Columbia. Some states are famous for their noisy cities. Others are famous for their trees and mountains. Some states have kilometres and kilometres of farmland. The largest state is Alaska. You can see big bears there. Michigan is situated in the valley of the Great Lakes. New Jersey, on the Atlantic coast, is famous for its gardens, and Minnesota, for its wonderful wheat fields. Abraham Lincoln, the sixteenth president, began his political activity in Illinois and this state is called the Land of Lincoln. California is situated on the west coast and is famous for Hollywood and films. Montana is full of sheep and cows. It's also the land of cowboys, Indians and rodeo. Do you know what Florida is famous for?"
        },
        "fresenius": {
            "ua": "Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей, цуратись насолоди і вихваляти страждання, я розкрию перед вами всю картину і роз’ясню, що саме говорив цей чоловік, який відкрив істину, якого я б назвав зодчим щасливого життя. Дійсно, ніхто не відкидає, не зневажає, не уникає насолод тільки через те, що це насолоди, але лише через те, що тих, хто не вміє розумно вдаватися насолоді, осягають великі страждання. Так само як немає нікого, хто полюбивши, вважав за краще і зажадав би саме страждання тільки за те, що це страждання, а не тому, що інший раз виникають такі обставини, коли страждання і біль приносять якесь і чималу насолоду. Якщо скористатися найпростішим прикладом, то хто з нас став би займатися якими б то не було тяжкими фізичними вправами, якщо б це не приносило з собою якоїсь користі? І хто міг би по справедливості дорікнути прагнення до насолоди, яке не несло б з собою ніяких неприємностей, або того, хто уникав би такого страждання, яке не приносило б з собою ніякої насолоди?",
            "en": "Britain is one of the most highly industrialised countries in the world: for every person employed in agriculture 12 are employed in industry. The original base of British industry was coal-mining, iron and steel and textiles. Today the most productive sectors include high-tech industries, chemicals, finance and the service sectors, especially banking, insurance and tourism"
        },
        "instagram": {
            "ua": "Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей, цуратись насолоди і вихваляти страждання, я розкрию перед вами всю картину і роз’ясню, що саме говорив цей чоловік, який відкрив істину, якого я б назвав зодчим щасливого життя. Дійсно, ніхто не відкидає, не зневажає, не уникає насолод тільки через те, що це насолоди, але лише через те, що тих, хто не вміє розумно вдаватися насолоді, осягають великі страждання. Так само як немає нікого, хто полюбивши, вважав за краще і зажадав би саме страждання тільки за те, що це страждання, а не тому, що інший раз виникають такі обставини, коли страждання і біль приносять якесь і чималу насолоду. Якщо скористатися найпростішим прикладом, то хто з нас став би займатися якими б то не було тяжкими фізичними вправами, якщо б це не приносило з собою якоїсь користі? І хто міг би по справедливості дорікнути прагнення до насолоди, яке не несло б з собою ніяких неприємностей, або того, хто уникав би такого страждання, яке не приносило б з собою ніякої насолоди?",
            "en": "The oil company Shell invented a new 'matching-half' promotion called 'Make Money*. Each time people bought a Shell product they were given half of a bank note. If they got the other half of the note they could get the money for the two halves. So for example, if they got two halves of a 500 soum note, they could get 500 soum in cash in the Shell shop. The competition was very successful because it was simple, it was easy to win and people liked getting cash immediately. Shell liked it because it could control the amount of money it had to pay. It printed a limited number of matching halves. 'Make Money' was a very successful promotion and paid for itself many times over. It helped Shell to increase its sales by 50% over a ten week period. When the promotion was over, sales remained high for several This was because some motorists who had changed to buy Shell products during the promotion continued to buy them after the promotion ended."
        },
        "leverX": {
            "ua": "Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей, цуратись насолоди і вихваляти страждання, я розкрию перед вами всю картину і роз’ясню, що саме говорив цей чоловік, який відкрив істину, якого я б назвав зодчим щасливого життя. Дійсно, ніхто не відкидає, не зневажає, не уникає насолод тільки через те, що це насолоди, але лише через те, що тих, хто не вміє розумно вдаватися насолоді, осягають великі страждання. Так само як немає нікого, хто полюбивши, вважав за краще і зажадав би саме страждання тільки за те, що це страждання, а не тому, що інший раз виникають такі обставини, коли страждання і біль приносять якесь і чималу насолоду. Якщо скористатися найпростішим прикладом, то хто з нас став би займатися якими б то не було тяжкими фізичними вправами, якщо б це не приносило з собою якоїсь користі? І хто міг би по справедливості дорікнути прагнення до насолоди, яке не несло б з собою ніяких неприємностей, або того, хто уникав би такого страждання, яке не приносило б з собою ніякої насолоди?",
            "en": "The Internet was invented in the late 1960s by the US Defense Department's Advanced Research Projects Agency. In 1969, there was a network of just four mainframe computers. A mainframe computer is a large, powerful computer, shared by many users. The idea of the electronic mailbox was born when users looked for a way to talk to each other electronically. By 1984,the Internet had begun to develop into the form we know today. Electronic mail is much faster than traditional mail, because once the message is typed out, it arrives in the electronic mail box of the recipient within minutes. It's better to use e-mail to contact friends rather than phone them, because e-mail is cheaper for long distances than the phone. People can share their interests through the Internet and it makes it very easy to exchange ideas and information."
        },
        "youTube": {
            "ua": "Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей, цуратись насолоди і вихваляти страждання, я розкрию перед вами всю картину і роз’ясню, що саме говорив цей чоловік, який відкрив істину, якого я б назвав зодчим щасливого життя. Дійсно, ніхто не відкидає, не зневажає, не уникає насолод тільки через те, що це насолоди, але лише через те, що тих, хто не вміє розумно вдаватися насолоді, осягають великі страждання. Так само як немає нікого, хто полюбивши, вважав за краще і зажадав би саме страждання тільки за те, що це страждання, а не тому, що інший раз виникають такі обставини, коли страждання і біль приносять якесь і чималу насолоду. Якщо скористатися найпростішим прикладом, то хто з нас став би займатися якими б то не було тяжкими фізичними вправами, якщо б це не приносило з собою якоїсь користі? І хто міг би по справедливості дорікнути прагнення до насолоди, яке не несло б з собою ніяких неприємностей, або того, хто уникав би такого страждання, яке не приносило б з собою ніякої насолоди?",
            "en": "There are many stories about the origin of this holiday. The following is one of them. In the third century, the Roman Emperor Claudius forbade young men to marry, as then they didn't want to join his army. A priest named Valentine secretly married young people. One night he was caught and thrown in prison. His punishment was death. On that day, February 14, he left a little note for the daughter of the prison guard, who had become his friend. He signed it: 'Love from your Valentine'. Today, people celebrate Valentine's Day in many ways. They send cards, sweets or flowers to someone they love. Children usually decorate their classrooms with red paper hearts. They put all the greetings cards into one box and then distribute them. Sometimes it is difficult to guess who the sender is, as the cards usually say 'Be my Valentine' and are not signed."
        },
        "myContact": {
            "ua": "Moї контакти:",
            "en": "My contacts:"
        },
        "footer_about": {
            "ua": "Про мене",
            "en": "About"
        },
        "footer_portfolio": {
            "ua": "Портфоліо",
            "en": "Portfolio"
        },
        "footer_contacts": {
            "ua": "Контакти",
            "en": "Contacts"
        }
    
    }

    select.addEventListener('change', changeURLLanguage);

    if (localLang === null || localLang === 'ua') {
        select.value = 'ua';
        location.href = `${locationHash}ua`;
        changeLanguage();
    } else {
        select.value = 'en';
        location.href = `${locationHash}en`;
        changeLanguage();
    }

    function changeLanguage() {
        let hash = window.location.hash;
        hash = hash.slice(1);
        localStorage.setItem('langLocal', hash);
        for (let key in langArr) {
            document.querySelector('.lng-' + key).innerHTML = langArr[key][hash];
            console.log(langArr[key][hash]);
        }
    }

    function changeURLLanguage() {
        let lang = select.value;
        location.href = locationHash + lang;
    
        changeLanguage();
    }


}