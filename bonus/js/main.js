const app = new Vue({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        menuVisible: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        menuVisible: false,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        menuVisible: false,
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        menuVisible: false,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        menuVisible: false,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        menuVisible: false,
                    }
                ],
            },	{
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        menuVisible: false,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        menuVisible: false,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        menuVisible: false,
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        menuVisible: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        menuVisible: false,
                    }
                ],
            },
        ],
        activeChat: 0,
        newMessage:'',
        nameConctact: '',
    },
    methods: {
        setChat(chatIndex) {
            this.activeChat = chatIndex;
        },
        addMessage() {
            if(this.newMessage !== '') {
                const nowNewMessagge = dayjs().format('DD/MM/YY HH:mm:ss');
                this.contacts[this.activeChat].messages.push({
                    date: nowNewMessagge,
                    text: this.newMessage,
                    status: 'sent',
                });

                // clean
                this.newMessage = '';

                // answer
                setTimeout(this.answer, 1000);
            }
        },
        answer() {
            const nowAnswer = dayjs().format('DD/MM/YY HH:mm:ss');
                this.contacts[this.activeChat].messages.push({
                    date: nowAnswer,
                    text: 'ok',
                    status: 'received',
                });
        },
        searchChat() {
            for(let i = 0; i < this.contacts.length; i++) {
                if(this.contacts[i].name.toLowerCase().includes(this.nameConctact)) {
                    this.contacts[i].visible = true;
                }
                else {
                    this.contacts[i].visible = false;
                }
            }
        },
        showMessageMenu(messageIndex) {
            this.contacts[this.activeChat].messages[messageIndex].menuVisible = !this.contacts[this.activeChat].messages[messageIndex].menuVisible;
        },
        deleteMessage(messageIndex) {
            this.contacts[this.activeChat].messages.splice(messageIndex, 1);
        },
    }
})