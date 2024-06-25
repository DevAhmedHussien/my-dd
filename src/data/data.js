import img1sex from '../images/various-plastic-bottles-pills.jpg'
import img2sex from '../images/pills-forming-arrow.jpg'
import img3sex from '../images/pills-forming-heart.jpg'
import img5sex from '../images/pills-package (1).jpg'
import img6sex from '../images/pills-package (2).jpg'
import img7sex from '../images/high-angle-medical-desk-composition.jpg'
import img8sex from '../images/various-plastic-bottles-pills (2).jpg'
import img9sex from '../images/pills-forming-arrow.jpg'
import ava1 from "../images/avatar1.jpg"
import ava2 from "../images/avatar2.jpg"
import ava3 from "../images/avatar3.jpg"
import ava4 from "../images/avatar4.jpg"

export const products = {
    sex:[
        {
            id: 0,
            category: 'sex',
            title: 'Viagra',
            description: 'Take one tablet with water at least 30 minutes before sexual activity. Do not take more than one tablet in a 24-hour period. Can be taken with ',
            instruction: 'Take one tablet with water at least 30 minutes before sexual activity. Do not take more than one tablet in a 24-hour period. Can be taken with or without food.',
            last: 'For best results, follow the instructions consistently.',
            quantity: 1,
            preference: 'generic',
            frequency: 'one month',
            price: 100,
            numberOfPills: 4,
            img: img1sex
        },
        {
            id: 1,
            category: 'sex',
            title: 'Cialis',
            description: 'Sildenafil citrate enhances blood flow to the penis, helping achieve and maintain an erection when sexually stimulated.',
            instruction: 'Take one tablet with water at least 30 minutes before sexual activity. Can be taken with or without food.',
            last: 'Avoid alcohol consumption while taking Cialis.',
            quantity: 1,
            preference: 'generic',
            frequency: 'one month',
            price: 100,
            numberOfPills: 4,
            img: img2sex
        },
        {
            id: 2,
            category: 'sex',
            title: 'Viagra & Cialis Combo',
            description: 'A combination of Viagra and Cialis can offer the best of both worlds: the fast-acting benefits of Viagra and the extended effectiveness of Cialis.',
            instruction: 'Take one tablet of Viagra with water 30 minutes before sexual activity. Take one tablet of Cialis with water 2 hours before or after the Viagra dose.',
            last: 'Consult your doctor before combining medications.',
            quantity: 1,
            preference: 'generic',
            frequency: 'one month',
            price: 100,
            numberOfPills: 4,
            img: img3sex
        },
    ],
    weight_loss: [
        {
            id: 6,
            category: 'weight_loss',
            title: 'Ozempic',
            description: 'Inject once weekly on the same day each week. Administer subcutaneously in the abdomen, thigh, or upper arm.',
            instruction: 'Administer subcutaneously in the abdomen, thigh, or upper arm. Follow the provided instructions for proper injection technique.',
            last: 'Store in the refrigerator. Do not freeze. Protect from light.',
            quantity: 1,
            preference: 'generic',
            frequency: 'one month',
            price: 100,
            numberOfPills: 4,
            img: img9sex
        },
        {
            id: 7,
            category: 'weight_loss',
            title: 'Mounjaro',
            description: 'Take one tablet daily with water in the morning or as directed by your healthcare provider.',
            instruction: 'Take one tablet daily with water in the morning. Do not exceed the recommended dosage.',
            last: 'Maintain a balanced diet and exercise regimen for optimal results.',
            quantity: 1,
            preference: 'generic',
            frequency: 'one month',
            price: 100,
            numberOfPills: 4,
            img: img5sex
        },
    ],
    hair_loss: [
        {
            id: 6,
            category: 'hair_loss',
            title: 'Stopping Hair Loss',
            description: 'Apply directly to the scalp once daily. Massage into the scalp gently. Wash hands thoroughly after application.',
            instruction: 'Apply directly to the scalp once daily, preferably at night. Avoid washing hair for at least 4 hours after application.',
            last: 'Use consistently for at least 6 months to see noticeable results.',
            quantity: 1,
            preference: 'generic',
            frequency: 'one month',
            price: 100,
            numberOfPills: 4,
            img: img6sex
        },
        {
            id: 7,
            category: 'hair_loss',
            title: 'Regrowing Hair',
            description: 'Take one tablet daily with water. Results may take several months to become noticeable.',
            instruction: 'Take one tablet daily with water. Consult your healthcare provider for personalized advice.',
            last: 'Avoid excessive heat and moisture. Store in a cool, dry place.',
            quantity: 1,
            preference: 'generic',
            frequency: 'one month',
            price: 100,
            numberOfPills: 4,
            img: img7sex
        },
    ],
    mental_health: [
        {
            id: 6,
            category: 'mental_health',
            title: 'Bupropion XL',
            description: 'Take one tablet daily with or without food. Swallow whole, do not crush or chew.',
            instruction: 'Take one tablet daily at the same time each day. Do not abruptly discontinue medication without consulting your doctor.',
            last: 'Report any unusual changes in mood or behavior to your healthcare provider.',
            quantity: 1,
            preference: 'generic',
            frequency: 'one month',
            price: 100,
            numberOfPills: 4,
            img: img8sex
        },
        {
            id: 7,
            category: 'mental_health',
            title: 'Citalopram',
            description: 'Take one tablet daily with water. Can be taken with or without food.',
            instruction: 'Take one tablet daily at the same time each day. Avoid alcohol consumption while taking Citalopram.',
            last: 'Store at room temperature away from moisture and heat.',
            quantity: 1,
            preference: 'generic',
            frequency: 'one month',
            price: 100,
            numberOfPills: 4,
            img: img5sex
        },
        {
            id: 8,
            category: 'mental_health',
            title: 'Escitalopram',
            description: 'Take one tablet daily with water. Swallow whole, do not crush or chew.',
            instruction: 'Take one tablet daily at the same time each day. Notify your doctor of any new or worsening symptoms immediately.',
            last: 'Keep out of reach of children. Store at room temperature away from moisture and heat.',
            quantity: 1,
            preference: 'generic',
            frequency: 'one month',
            price: 100,
            numberOfPills: 4,
            img: img3sex
        },
        {
            id: 9,
            category: 'mental_health',
            title: 'Fluoxetine',
            description: 'Take one tablet daily with water. Can be taken with or without food.',
            instruction: 'Take one tablet daily at the same time each day. Report any side effects to your healthcare provider.',
            last: 'Store in a cool, dry place away from direct sunlight.',
            quantity: 1,
            preference: 'generic',
            frequency: 'one month',
            price: 100,
            numberOfPills: 4,
            img: img1sex
        },
        {
            id: 10,
            category: 'mental_health',
            title: 'Paroxetine',
            description: 'Take one tablet daily with water. Swallow whole, do not crush or chew.',
            instruction: 'Take one tablet daily at the same time each day. Do not suddenly stop taking Paroxetine without consulting your doctor.',
            last: 'Store at room temperature away from moisture and heat.',
            quantity: 1,
            preference: 'generic',
            frequency: 'one month',
            price: 100,
            numberOfPills: 4,
            img: img6sex
        },
    ]
};



export const providers =
[
    {
        id:0,
        name:'Dr: X',
        img:ava1
    },
    {
        id:1,
        name:'Dr: Y',
        img:ava2
    },
    {
        id:2,
        name:'Dr: Z',
        img:ava3
    },
    {
        id:3,
        name:'Dr: G',
        img:ava4
    }
]