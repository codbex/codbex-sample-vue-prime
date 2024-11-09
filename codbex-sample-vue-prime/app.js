// Import your translations
import en from './locales/en.json' with { type: "json" };
import fr from './locales/fr.json' with { type: "json" };

// Define the messages for each language
const messages = {
    en,
    fr
};

const items = Vue.ref([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
])

// Create the i18n instance with options
const i18n = VueI18n.createI18n({
    locale: 'en', // Set default language
    messages,     // Set locale messages
});

const app = Vue.createApp({
    data() {
        return {
            formData: {
                name: '',
                date: new Date(),
                gender: '',
                age: 18,
                agree: false,
                option: ''
            },
            locale: this.$i18n.locale,
            users: [], // For storing remote data
            items: items
        };
    },
    methods: {
        submitForm() {
            alert(JSON.stringify(this.formData));
        },
        // Method to fetch remote data
        async fetchRemoteData() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                this.users = await response.json();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        changeLocale() {
            this.$i18n.locale = this.locale; // Switch language dynamically
        }
    },
    mounted() {
        // Fetch remote data when the component is mounted
        this.fetchRemoteData();
    }
});

app.use(i18n);
app.use(PrimeVue.Config, {
    theme: {
        preset: PrimeVue.Themes.Aura
    }
});

app.component('p-form', PrimeVue.Form);
app.component('p-input-text', PrimeVue.InputText);
app.component('p-date-picker', PrimeVue.DatePicker);
app.component('p-radio-group', PrimeVue.RadioButtonGroup);
app.component('p-radio', PrimeVue.RadioButton);
app.component('p-button', PrimeVue.Button);
app.component('p-slider', PrimeVue.Slider);
app.component('p-select', PrimeVue.Select);
app.component('p-checkbox', PrimeVue.Checkbox);
app.component('p-data-table', PrimeVue.DataTable);
app.component('p-column', PrimeVue.Column);


app.mount('#app');
