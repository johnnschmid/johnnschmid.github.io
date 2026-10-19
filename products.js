// products.js

const SITE_SETTINGS = {

cursorSkin: false, // или false для системного курсора
defaultFontSize: 'Medium'

};


// Настройки слайдшоу
const SLIDESHOW_CONFIG = {
    showOnHome: true,          // Показывать ли слайдшоу на главной (true/false)
    albumsRandom: true,
    imagesRandom: true,
    slideInterval: 5000        // Скорость смены картинок в миллисекундах (например, 4000 = 4 секунды)
};

// Настройки магазина: true — скрыть магазин отовсюду, false — показывать
const SHOP_CONFIG = {
    hideShop: true 
};



// Отдельный массив для 3D CAD секции
const CAD_MODELS_DATA = [
/*
    {
        name: 'Extruder Assembly',
        fileUrl: 'https://drive.usercontent.google.com/download?export=download&confirm=t&id=1KjaDCmBSuc0_EDkZCfWAW1WTets-klAV', // Ссылка на ваш STEP файл
        type: 'step'
    },
*/   
    {
        name: 'Tape Spacer',
        fileUrl: 'models/spacer.stl',    // Ссылка на ваш STL файл
        type: 'stl'
    },
    {
        name: 'Heater Spring',
        fileUrl: 'models/spring.step',   // Ссылка на ваш STEP файл
        type: 'step'
    }
];


const PRODUCTS_DATA = [
    { 
        id: 1, 
        name: 'RePet Filament Extruder', 
        price: 199.99, 
        rating: 5, 
        isVisible: true, 
		youtubeId: 'GzDiOcrPyL4', 
        //videoUrl: 'https://drive.google.com/file/d/1SF9vcNE9mLlR-rOrfgBYs9brZMLN31sH/preview',
        downloadUrl: 'https://drive.usercontent.google.com/download?export=download&confirm=t&id=1YMHcb2ZrTu7014qup8AXLSSAJnhL44xX',
        images: [
            'https://lh3.googleusercontent.com/pw/AP1GczM5q7Vb73DAjlDXVzkPN2U3sOrcCl0uZkOvfRzoUR7M8cbzS7HOeCCf2Ojlj18D_88iaoOY2lR6Gg0bsj5Xim97SvtYf-asbjS0gBTQ35c0uUp5btOvZMvOaO2md_SoyfRZshu7aonrXKlHxz_ydUk=w1128-h933-s-no',
            'https://lh3.googleusercontent.com/pw/AP1GczNMXK2kaysBcx1_FR3ttZue1hYOWsS6MtWPAVgHzOYnS7UaVKUtdEpj4_QLoahqRs0kBZNhp0gVg4ITV8IBnowYdDkV4_o4nYF9CbgpudsYqsBsBGze0G4wzvjUSnxzauztw-P9kxPKWxfwTdhE_u0=w700-h933-s-no', 
            'https://lh3.googleusercontent.com/pw/AP1GczNIQNQ3M4iaYGgDpb-AUzzTf_7ORwB8hdhsG59lhKyD32xQjOnLBFRlKU0gH1dd5dIuQTCaiJRFozb7Xds1dPBVtTFHQiyMQi0IXloz--BgBveLkqgv6tYZgZyX4SfyzU3UFcZgWlu3vHkUmf-VOmw=w1244-h933-s-no'
        ], 
        currentImg: 0, 
        description: 'RePet filament extruder designed to make standard FDM 3D Printer filament from PET bottles', 
        reviews: [{user: 'Alex T.', date: 'Jan 12', rating: 5, text: 'Best filament extruder I have ever used.'}], 
        colors: [{hex: '#000', name: 'Black'}, {hex: '#2D5BFF', name: 'Blue'}, {hex: '#FF5B5B', name: 'Red'}], 
        selectedColor: {hex: '#000', name: 'Black'} 
    },
    { 
        id: 2, 
        name: 'RePet Tape Width Spacer', 
        price: 3.99, 
        rating: 5, 
        isVisible: true,
        downloadUrl: 'https://drive.usercontent.google.com/download?export=download&confirm=t&id=1YMHcb2ZrTu7014qup8AXLSSAJnhL44xX',
        images: [
            'https://lh3.googleusercontent.com/pw/AP1GczPgBo_7C2KwYIJ29EcqmHAEeoHDVBybO91Sahj1ToHJkACOVb3g30ML3A9b0hHjlYlEcQGDfqFwYMcxBBIyB-EXlrKRQsKIbTNDVMUB-Q0PIoiSc7orZfNCbUUYc66n28OBII436Wof0A8sfKhzE5M=w1244-h933-s-no', 
        ], 
        currentImg: 0, 
        description: 'Detachable RePet tape width spacer. Adjusts tape width at bottle cutting process', 
        reviews: [{user: 'Mia R.', date: 'Feb 05', rating: 5, text: 'Shipping was quick'}], 
        colors: [{hex: '#000', name: 'Black'}, {hex: '#2D5BFF', name: 'Blue'}, {hex: '#FFF', name: 'White'}], 
        selectedColor: {hex: '#000', name: 'Black'} 
    },
    { 
        id: 3, 
        name: 'NiCr Welder Heater Spring', 
        price: 0.99, 
        rating: 5, 
        isVisible: true, 
        images: [
            'https://lh3.googleusercontent.com/pw/AP1GczNpiE8GOVi1EofHW922b11Sx_RDeUKzZIKB4S5xm7rrTI4igTIR-6nURcwESxJy3m6nX12DpBChMbm06rgCFpOSQ_xbBBW3uhMpz2wTRFKDW07thieLXI3wQTLs3wcfS8XtcndM4QoWdBsyA4ALuHA=w1244-h933-s-no', 
        ], 
        currentImg: 0, 
        description: 'NiCr Welder Heater Spring. 12V', 
        reviews: [{user: 'John W.', date: 'Dec 01', rating: 5, text: 'Very good quality'}], 
        colors: [{hex: '#333', name: 'Charcoal'}], 
        selectedColor: {hex: '#333', name: 'Charcoal'} 
    },
    { 
        id: 4, 
        name: 'Filament Afterweld Cleaner', 
        price: 3.99, 
        rating: 5, 
        isVisible: true, 
        images: [
			'https://lh3.googleusercontent.com/pw/AP1GczM6RVrSL-m62cgg07rzhc7LhSxP8EufTPtYIw3q6FU_eQXdPH84oXci1KFdWiNwqcUw-UcCk1Fzp8grzS8bZKO2Gmbpt2FOuSBYFxUx-m2BntybUIWdFk9Ktx9Ax3iIkcCYJNHYybQf-0EgpNH8G9o=w1440-h1080-s-no',
        ], 
        currentImg: 0, 
        description: 'Сleans the weld seam from burrs', 
        reviews: [{user: 'Markus S.', date: 'Jan 19', rating: 5, text: 'Funktioniert einwandfrei!'}], 
        colors: [{hex: '#4b5563', name: 'Gray'}, {hex: '#1e40af', name: 'Navy'}], 
        selectedColor: {hex: '#4b5563', name: 'Gray'} 
    },
    { 
        id: 5, 
        name: 'Pastel Highlighters', 
        price: 1.59, 
        rating: 5, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/459799/pexels-photo-459799.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/4006143/pexels-photo-4006143.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/4006154/pexels-photo-4006154.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Set of 6 aesthetic pastel colors that wont bleed through paper.', 
        reviews: [], 
        colors: [{hex: '#fef08a', name: 'Yellow'}, {hex: '#bbf7d0', name: 'Mint'}], 
        selectedColor: {hex: '#fef08a', name: 'Yellow'} 
    },
    { 
        id: 6, 
        name: 'Wireless Mouse', 
        price: 11.59, 
        rating: 4, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/5082570/pexels-photo-5082570.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Ergonomic wireless mouse with silent clicks and long battery life.', 
        reviews: [], 
        colors: [{hex: '#000', name: 'Black'}, {hex: '#ef4444', name: 'Red'}], 
        selectedColor: {hex: '#000', name: 'Black'} 
    },
    { 
        id: 7, 
        name: 'Desk Organizer', 
        price: 2.99, 
        rating: 5, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/4006152/pexels-photo-4006152.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/4066041/pexels-photo-4066041.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Keep your workspace tidy. Multiple compartments for pens, notes, and clips.', 
        reviews: [], 
        colors: [{hex: '#fff', name: 'White'}, {hex: '#000', name: 'Black'}], 
        selectedColor: {hex: '#fff', name: 'White'} 
    },
    { 
        id: 8, 
        name: 'Sticky Note Bundle', 
        price: 5.69, 
        rating: 2, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/6192337/pexels-photo-6192337.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/1206101/pexels-photo-1206101.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/5416480/pexels-photo-5416480.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Colorful sticky notes in various sizes for reminders and bookmarks.', 
        reviews: [], 
        colors: [{hex: '#fef08a', name: 'Yellow'}], 
        selectedColor: {hex: '#fef08a', name: 'Yellow'} 
    },
    { 
        id: 9, 
        name: 'Math Geometry Set', 
        price: 3.99, 
        rating: 2, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/4253620/pexels-photo-4253620.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/30557451/pexels-photo-30557451.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Complete set including compass, protractor, and rulers in a protective case.', 
        reviews: [], 
        colors: [{hex: '#cbd5e1', name: 'Silver'}], 
        selectedColor: {hex: '#cbd5e1', name: 'Silver'} 
    },
    { 
        id: 10, 
        name: 'Noise-Canceling Buds', 
        price: 10.99, 
        rating: 4, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/3921883/pexels-photo-3921883.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Block out distractions and focus on your studies with premium audio quality.', 
        reviews: [], 
        colors: [{hex: '#fff', name: 'White'}, {hex: '#000', name: 'Black'}], 
        selectedColor: {hex: '#fff', name: 'White'} 
    },
    { 
        id: 11, 
        name: 'Lined Legal Pads', 
        price: 7, 
        rating: 3, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/5628244/pexels-photo-5628244.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/5301703/pexels-photo-5301703.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/5538617/pexels-photo-5538617.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Large format pads for detailed notes and drafting.', 
        reviews: [], 
        colors: [{hex: '#fff', name: 'White'}], 
        selectedColor: {hex: '#fff', name: 'White'} 
    },
    { 
        id: 12, 
        name: 'Laptop Sleeve', 
        price: 18, 
        rating: 2, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/4067090/pexels-photo-4067090.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/4458519/pexels-photo-4458519.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Water-resistant sleeve with soft lining to protect your tech.', 
        reviews: [], 
        colors: [{hex: '#111', name: 'Ebony'}], 
        selectedColor: {hex: '#111', name: 'Ebony'} 
    },
    { 
        id: 13, 
        name: 'Hardcover Sketchbook', 
        price: 4.99, 
        rating: 5, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/6373290/pexels-photo-6373290.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/159621/sketch-art-draw-creative-159621.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/1032000/pexels-photo-1032000.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Heavyweight paper suitable for ink, pencil, and light watercolor.', 
        reviews: [], 
        colors: [{hex: '#000', name: 'Black'}], 
        selectedColor: {hex: '#000', name: 'Black'} 
    },
    { 
        id: 14, 
        name: 'USB-C Hub Adapter', 
        price: 2.99, 
        rating: 3, 
        isVisible: false, 
        images: [
            'https://images.pexels.com/photos/4503734/pexels-photo-4503734.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/30553755/pexels-photo-30553755.jpeg?auto=compress&cs=tinysrgb&w=400', 
            'https://images.pexels.com/photos/5749113/pexels-photo-5749113.jpeg?auto=compress&cs=tinysrgb&w=400'
        ], 
        currentImg: 0, 
        description: 'Expand your laptop connectivity with HDMI, USB, and SD ports.', 
        reviews: [], 
        colors: [{hex: '#94a3b8', name: 'Steel'}], 
        selectedColor: {hex: '#94a3b8', name: 'Steel'} 
    }
];









const SECTIONS_DATA = [
    { 
        id: 'about',
        menuTitle: 'About',
        inMenu: true,        
        //bgClass: 'bg-gray-100', // 'bg-white' или 'bg-gray-100'
        //imageLeft: true,
        aspectClass: 'aspect-[4/4]',
        showSteps: false,
        currentStep: 'tape',
        steps: [
            { id: 'bottle', label: 'Bottle' },
            { id: 'tape', label: 'Tape' },
            { id: 'filament', label: 'Filament', short: 'Fil.' },
            { id: 'join', label: 'Joining', short: 'Join' },
            { id: 'spool', label: 'Spool' },
            { id: 'printing', label: 'Print' }
        ],
        title: 'About',
		p1: 'Hi everyone! My name is Johannes Schmid. I am a full-stack electronics developer holding a Master\'s degree in Multichannel Telecommunication Systems from the Ural State Technical University of Telecommunications and Informatics.',
		p2: 'With extensive experience in developing technical rehabilitation aids for people with disabilities. Im very experienced in embedded systems, firmware (STM32, Linux/Armbian, Android), PCB design (Altium Designer, KiCad), and 3D modeling (SolidWorks, FreeCad), I build innovative solutions that merge hardware and software seamlessly.',
    
    hints: [
        {
            emoji: '🎓',
            title: 'Education:',
            text: 'Master\'s degree in Multichannel Telecommunication Systems.',
            youtubeUrl: '',
            youtubeText: ''
        },
        {
            emoji: '💼',
            title: 'Experience:',
            text: 'Full-stack hardware & software developer specializing in medical/rehabilitation devices.',
            youtubeUrl: '',
            youtubeText: ''
        },
        {
            emoji: '▶️',
            title: 'Watch',
            text: 'new videos on',
            youtubeUrl: 'https://www.youtube.com/@ReInstruments',
            youtubeText: 'YouTube'
        },
        {
            emoji: '🌍',
            title: 'Feel free',
            text: 'to visit my ',
            youtubeUrl: 'https://github.com/ivandevel/',
            youtubeText: 'GitHub'
        }
    ],
        
        items: [
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOQiNR_dCT9NJdrOMRciviGI9Xniz3o3UKrxrzqhMEayFu4j-QZoHNgpRWJewA5E3sBSn4y3l4k47c3qJiOBd_LM56hA-wX2p3W5aVmd9fOLjO1rD13T3vCnAqph-oN9ZqrIi1z1iqdspN5D3cFKO9m=w1672-h941-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPaf4XJ8_Usra7J3wo9-mZBYOXUnFooO9SxlshrJHDzwTHnJ1VxfAvVIHqdDfQGBYsov_zyEswhowzn1sykLuX3O-KLvs46dmgwL9aWW4F8sNKfMzRsd9ibMHLmyEcPGxd3tmHmD5r65pZd4WQG2-Lb=w1086-h1448-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM1ifx-4RcXRrorgBBB7h5l45bsiwe6Zg5A1Jos0UTj6J6CQaDB0MxK5lXfSAmMcLNMCbVtsFJorCQKM_FAK9gso8JVjMELcC607Cptv_oH0mDLWKSaYFA94OaUNWXKgN5iYYegqSi-9GLCT_CyfDzG=w1672-h941-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNT_khzmI-rGjatjwp_LMi5WCPlMJsntOt6Ufr27Nk7gsJdyk59WLP-vr67XaKg7nYAsU6YGeOX9GnOubUQ_TQDlG8yIPbZfYl5j9UEkg2A-ywS2R-JVjOc79giyk7mZwMA_UpZKcQ-lKHn5aWCzQIU=w1448-h1086-s-no' },            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOn-1ERV_ERENsK40J2qPSKQxeIVCA0ZsZwpvII5kcghhPDzfwk6sgtDheE3qAHrJrBGA5jwoLlviLoZcNqpdsa0ww1qqlAJ8MspSdLo2-zWDcHT-PdoGU1sYZq1tyO7VpYo3Z_9e1gJqhhvz5LRl9T=w1086-h1448-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPEJ4a1tC40W2t_0FfPZAzSEqfAFDbHmRI8aAaEO2J2rGL1YGduG8qcbh25KGrWrKIvrFK9_LyCui0DafsiQfoYTvQ9gjV3SxAVzXfoAF0oUuCw2D1UJvt7mXVq6UI8hjwvYNHGdbixCg3Xr6o5_Wt_=w3579-h2013-s-no' },
            //{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPed9rTIz5vxA6aWzJ5MtqTKjoF-i8WjTWRMlK46sJVeUgBSgJzZC0ItmqhRqUygq3zp9wsuffC9GnKxYh6v-hHcdIgJVhdIPaXHsLEkAxuH9F8sAwUg2enyijdM93jjjolDd3GFt2iNmP4zEbEdHwi=w1086-h1448-s-no' },
			{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNIS1ttqPvFb0x_RYyEq9C8VeLK4ccWlJFOq-Mnr2JlJtgGdDkaTCFg3m9bitvl-kpjhsQIYsALyczbfI_FMsBNXLypSBXmfDQZXKEyPd2yfrsV-JjNp6UVuHvKNb9DgF2YEL0n-5YXm3U4CX1rm-Ky=w1087-h1447-s-no' },
            { type: 'pdf', url: 'https://drive.usercontent.google.com/download?export=download&confirm=t&id=1ekCvtUsUVLTkgrTOHB7Qy2cqHE2R5Dab', title: 'Resume (PDF)' },
            { type: 'pdf', url: 'https://drive.usercontent.google.com/download?export=download&confirm=t&id=1QGFVjjxCcYgPwY4ZYbELje0WaiO815ox', title: 'Diplom (PDF)' },
            { type: 'pdf', url: 'https://drive.usercontent.google.com/download?export=download&confirm=t&id=19hlV3huYqnUShDzTAaF40CnnsKkgj6Ti', title: 'Certificate (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
    { 
        id: 'repet',
		menuTitle: 'RePet',
        inMenu: true,        
        //bgClass: 'bg-white', // 'bg-white' или 'bg-gray-100'
        //imageLeft: false,
        aspectClass: 'aspect-[4/4]',
        showSteps: true,
        currentStep: 'tape',
		title: 'RePet Filament Extruder',
		p1: 'The RePet Compact is an innovative, compact PET bottle filament extruder that gives you a near-limitless supply of plastic right at your workspace. The extruder is designed for quick and convenient processing of plastic PET bottles into filament suitable both for 3D printing and for use in grass trimmers.',
		p2: 'The extruder does not take up much space on the desk, consumes only 10 Watts of power, and saves you money on purchasing consumables.',

		hints: [
			{
				emoji: '🌍',
				title: 'Visit',
				text: 'our',
				youtubeUrl: 'https://reinstruments.github.io',
				youtubeText: 'Product Page'
			},
			{
				emoji: '▶️',
				title: 'Visit',
				text: 'product channel on',
				youtubeUrl: 'https://www.youtube.com/@ReInstruments',
				youtubeText: 'YouTube'
			},
			{
				emoji: '💡',
				title: 'Purpose:',
				text: 'Turn plastic PET bottles into 3D printer filament, saving money and time.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🔌',
				title: 'Efficiency:',
				text: 'Consumes only 10 Watts of power while saving you money on consumable materials.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🌱',
				title: 'Dual Purpose:',
				text: 'Produces filament suitable for 3D printing as well as for grass trimmer lines.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '📐',
				title: 'Compact Design:',
				text: 'Takes up minimal space on your workbench or desktop.',
				youtubeUrl: '',
				youtubeText: ''
			}
		],

		steps: [
			{ id: 'bottle', label: 'Bottle' },
			{ id: 'tape', label: 'Tape' },
			{ id: 'filament', label: 'Filament', short: 'Fil.' },
			{ id: 'join', label: 'Joining', short: 'Join' },
			{ id: 'spool', label: 'Spool' },
			{ id: 'printing', label: 'Print' }
		],
        
        items: [
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczODA556kXVdOWozG3WVVaS7-BtQvxKR4wCl6OJLhbnmG6OmEqZohhzRacfR51Q-L467uS21zU7kbSfxDahspLXYOZAChMd8F-Xjjy4FfNCK7qpEQBXacUwnN7IuGcgEtgEEpSpnz_7s09bP-UmxuWSr=w1066-h1008-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOamM289SEkng7GpO6sedf71EQNQgIUTlWQ9lHgUFUeSo5huWodmRu9Fda2jEuM1sxN5-ZvWQCvYbcBBbA56tKjPScmcyfL-vGZoWPt-b5rakVuzVB_0WstsQUMCh9CvofdiHbwTqkM1OLvGGVxCXda=w1500-h1000-s-no' },
            //{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM5q7Vb73DAjlDXVzkPN2U3sOrcCl0uZkOvfRzoUR7M8cbzS7HOeCCf2Ojlj18D_88iaoOY2lR6Gg0bsj5Xim97SvtYf-asbjS0gBTQ35c0uUp5btOvZMvOaO2md_SoyfRZshu7aonrXKlHxz_ydUk=w1201-h993-s-no' },
            //{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczODA556kXVdOWozG3WVVaS7-BtQvxKR4wCl6OJLhbnmG6OmEqZohhzRacfR51Q-L467uS21zU7kbSfxDahspLXYOZAChMd8F-Xjjy4FfNCK7qpEQBXacUwnN7IuGcgEtgEEpSpnz_7s09bP-UmxuWSr=w1066-h1008-s-no' },
            //{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczODA556kXVdOWozG3WVVaS7-BtQvxKR4wCl6OJLhbnmG6OmEqZohhzRacfR51Q-L467uS21zU7kbSfxDahspLXYOZAChMd8F-Xjjy4FfNCK7qpEQBXacUwnN7IuGcgEtgEEpSpnz_7s09bP-UmxuWSr=w1066-h1008-s-no' },
            //{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczODA556kXVdOWozG3WVVaS7-BtQvxKR4wCl6OJLhbnmG6OmEqZohhzRacfR51Q-L467uS21zU7kbSfxDahspLXYOZAChMd8F-Xjjy4FfNCK7qpEQBXacUwnN7IuGcgEtgEEpSpnz_7s09bP-UmxuWSr=w1066-h1008-s-no' },
        
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMzub_T7Lu9gJqcjqml_COm910r53hHsWHtRV1NjXTXVD0Qn_kN2I9SdK6B45iBmkuTsD3YwJiWs1YhZrCLq57AvCXvpuFywyVvMqtryIR3J3jYbA91TG-YQ0fcImJvxmygxqEVSt4Vlr7l3alDmf1E=w1365-h768-s-no' },
            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNcv8xa5LvGe2QcbbCIAZaXqU6KnsSxfWVfsS6VqNOTWPAS4NYfrlaCOytrmWqlnNuRvlddMaoHILy-CRD5XbJyh4xkDvSVFx61MGuegDBb0Tm__y1mypzIK_qcRGJpJ7dzWPqf23eVfXdN8PwFze7h=w1369-h768-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczP47Yzw0ge0sC8AP4jOgeozOogNmKlUOgfTlm4Qx_eQ23isWjw2o20LaWuNPTDfGyDUt3HegFIoSGtIcdN5UGQ3BYxjE7nx9GJV1e_kuTYwOSjTA5KC8nHAhYoTou-8NbJp9GDB3dYm_M6V2e_3YFrI=w1920-h1080-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOsn7kKj85me6n0YI4WSEafR4-XQ5Uog42KxC3fL-AjYQXtGz7JY4u4UPEbHrcPiF1-TuR1LmPSTk-J8utPEZBj0CZDBtmsaosTZXtqB-V_HScnnx_Z5lIFKybbQQRat7IqmKV63CTskr3E93mFOu6H=w1100-h943-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNIv81Q1y_onHusiXBLynFkdq8tLIrAcNLXGXW5NG6oiou4VWzb1MQ0hwDQV7R5D019g6JCTH7gp4WQ78XF_8uqT-XYsS8S3YVUN6GmzJ1CmfgNeNiVcZh3RshZPh-ZhhnYCVqbvlOMhs1HucYzNzUR=w1587-h1319-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMGh65X55TTR_QmctKxAOMB9Y2_ZA6DlVCwJcee7yhAm_3WGIrUyv-YpYxw-8osn-_V6su0VxDdQ2zeRTWcFtHql88idIV8kmMnEw0Y0GpdhTMOwWDPzsJ_UjRpv958ko-rsbua7zRRfUKa9s-hjD3Q=w1365-h1061-s-no' },
            { type: 'video', url: 'https://www.youtube.com/embed/ymG4sdoDH3c' },
            { type: 'pdf', url: 'https://drive.usercontent.google.com/download?export=download&confirm=t&id=1YMHcb2ZrTu7014qup8AXLSSAJnhL44xX', title: 'Product info (PDF)' },
            { type: 'pdf', url: 'https://drive.usercontent.google.com/download?export=download&confirm=t&id=1YMHcb2ZrTu7014qup8AXLSSAJnhL44xX', title: 'Quick start (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
    { 
        id: 'voysa',
		menuTitle: 'Voysa',
        inMenu: false,        
        //bgClass: 'bg-gray-100',
        //imageLeft: true,
        aspectClass: 'aspect-[4/4]',
        showSteps: false,
        currentStep: 'tape',
        steps: [
            { id: 'bottle', label: 'Bottle' },
            { id: 'tape', label: 'Tape' },
            { id: 'filament', label: 'Filament', short: 'Fil.' },
            { id: 'join', label: 'Joining', short: 'Join' },
            { id: 'spool', label: 'Spool' },
            { id: 'printing', label: 'Print' }
        ],
		title: 'Audiobook Reader "Voysa"',
		p1: 'The "Voysa" Audiobook Reader is an advanced specialized device engineered specifically for blind and visually impaired individuals. It delivers a seamless, fully voice-controlled navigation experience designed to provide intuitive access to talking books, diverse music collections, live radio broadcasts, podcasts, and essential online internet services.',
		p2: 'Featuring a fully voiced interactive menu where every single action is accompanied by clear spoken prompts, it also includes a built-in voice recorder and a convenient bookmarking function. Offering exceptional connectivity, long-lasting battery performance, and extensive media compatibility, it empowers users with complete independence in daily learning, reading, and entertainment.',

		hints: [
			{
				emoji: '📚',
				title: 'Formats & Reading:',
				text: 'Supports DAISY talking books, all audio formats(mp3, aac, ogg), as well as text files (TXT, DOCX, EPUB, PDF) processed smoothly via an integrated text-to-speech synthesizer.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🌐',
				title: 'Connectivity & Online:',
				text: 'Equipped with built-in 4G LTE (featuring a SIM card slot for cellular calls and internet access), Wi-Fi (2.4 GHz), and Bluetooth 4.2 for wireless headphones or speakers.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🔋',
				title: 'Power & Storage:',
				text: 'Contains 5500mAh LiPo battery, USB Tye-C and Wireless Charging capability. Provides up to 24 hours of continuous operation on a single battery charge, 16GB of internal storage, and expandable support for SD/SDHC/SDXC memory cards up to 64GB.',
				youtubeUrl: '',
				youtubeText: ''
			}
		],
        
        items: [
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM8wzHdzKCS054gLbSXuJvpaX8y_IIWeI1Bm8ZJ4nF1upbE4QSzUVrhffJiJVzNAJYBv3coTW-B1074PMT72xFVNlcsXYOnab6sVlvOOKIUcng_G8YZB0k7uu9pdo6XawpE0sBFrDkHBmIUdQpL3Yq8=w1200-h1200-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOFRX_D6prTBoAwMkZ7ol00Wk2avM6KduX-ZKBi0HM3OXn8vGPxqlgQVZYfONK-37-18z9RvgbI4ARzVH255C669dW16KYh8REv-aELgqIonmXQ1ZFXP1e2WA52vEkwLtMJJdJWKsZvOMxqCWMUzVLs=w1280-h1280-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPADpP80j_IocPN1Msxj4XrVuvKzpXrf5I0HKR-YzR6s92IrAT6ZV2fclUkR6RlIF_9elaajCgtGLW97vNZmEf4bZXrPL0ilvEO-HTbJW-NFbwvgmK9p4oWiC_ce4jmRm3ihswWZMFJYRpKggr4EtJQ=w1200-h1200-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOx-p-GHd4zA4kEwtP-Jkz3Xq5PSabnL48RBHofm51TbL5EF20Qy3umd6Bwf-CSRv9ydWNlT1kqnB4MbPijPNBLGkxWfTcRYhzJN-s5MOs5caMQ4qFS939_2vd1TdrZ-Cj468Zp2_uxmq_y2gysuJXG=w1200-h1200-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPruogwW4B2tVQ4RKpD5mGsDJmDgPa1_4CruYkr5PAJiJeOfyr-KIxtd9MD4-6yew7EBsUl5ZIxgJCh9XvuXdB67KUQOt8gpfNGarBflwk-5RaOcLY_8pkh-5D1MPJHPCVjH8rvblqRBEhGWvRUgkNx=w1200-h1200-s-no' },
			{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOm9IoSIu3u_uQwh2x_9CboKaLX33scJmX07_k3p3xXxWyJbmUNmE-Q4eP1MsQu8yNRGXr_RXoMIVDsfFwLLHMXlkr6OZVeWvGBaiG2-r-rppR3QYdJMH4aeYc_r1uQA0u8wD9SiF0YT7ey6Ac4C7-B=w1510-h2013-s-no' }, 
            //{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczN_fNEj9fPTw63cw2EQydwGFwLELhyZpeiQph7X76t2De8mJgiBijA9z6PGwI972tHFye-GPQzzk-Q-FAjEnAJ31zj840JSGSQQmbqP-hnuq5SfmHysvHfnYbbyht1zzfsbas0Ve3oc7J73Oti0hPRH=w1200-h1200-s-no' },
            //{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPy-xiiLZzHYDtZZADkz3SXxXR5cwrOxTwobq3NGxwQl-k4dklSIT1YpoZmMC5ou3_ah0W33izBSetiTMO3kmSiuHwIC2fd3GtOEn76PhBYaDVJxkFCU9H-ykdP49WJYa7Rm0jOPCBSjOuASPwq42dz=w1200-h1200-s-no' },
            //{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPRmFsvDuDvgcKMAXSKCtTLVLirAbPwNBcHiW4BiMTpzEbThhZHazYPpEHOGslNmMtjTomr0gbf53rRydpMhXztXIHlMvacsziBCdKG8ZnXmxRZ7ppb8ovkZEESe9sevM2KrsWcKRb9gnJC_HTucWgx=w1200-h1200-s-no' },
            //{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPedDht_q4P2W2VsV38nUWHka2aBhboWGdOnv_QwNgXqVtINoAaPsAnxYshiU6R8LCbHET0n2J2_6GMPCQ8uzu7KPXz38Z4wvrSqUxgy2VwUKwLxV1X4kxP_rt2MjyFSUF5gcOEhhLBOURI1d88Nic1=w1200-h1200-s-no' },

            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMeeXH50JBHnH5vKemlompPEMOhPLp5bsN1Fcnqjf8_W0OOxyqy5iK37dwtFT57gcYQI-Kjy-AbW1NG0zR7a66oCVLjBUD7p8NpeB05EO5XzDURE9ZQbwwKBklFH0pNjXo3YZzZU3YD1qcFSETFFKjG=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOhNoqLMzZvVPOrvnZBUlL9sf92wDwMiajm5v1E3nL8VSPVuBrVshYiNeiDfY-tPKNX5bd4L_rbqlBOS0hacLo3QDLlrCE8MdnOVLiSew08aKggrX5xLGSAZwKAoVgz4yrdfBkX9eVTj2VR78xqDMrR=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczP60HNpHzED4CpXiaGsyFlFPgBvEQ3Vrsy1RyRStdb96AWPmb6RI-ZKTwSXVYcvOEI2YEJIYx1d8ww8fZ140nm9IOPrclNdof3zeMaSkm6wzFSndVpvegqhIh12ZKn8w5AWr1sZc9RBqVNRyNNM_GbA=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM1mNt5_6Y7JT0UjXfEcfJHrGlntnAcjLyU4agA3XhJa1QSvlmafgMfUrtz2XUORU5gmrvFABHy3LCA8sPn6wf3JgGGso3EhK4-g7ZSgfOSBy5RXkjERH7oOvGoW3Xxma_GkXwMy70OCTknzTe88Q3W=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPrHuz-uUpluaEV9SeyGvqY3Y63Y5zmfKhjr0-xhYEOw7E3bWB55T2Bsl9HSmgt_16XCbB5JdL5S_xNJtyz3rku143_JY3iduorQY_F5Ltj4Ne310Ku_obyVZ1R4BdL32tijkOKZW7UzvuqDKn-q5MC=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPd3qQdFrHjanaA_5i3vgDJiiQj0Y0GzqJCduDP8PqJOds9DaG45tKVo8WAZyWn8tOmlNAZHpbh0gJ6QxHZ-OwW0W2qGnX-o_sP4J7vjii1IUQHF-OL7lsbEZIkxJHdNE5_4nn4sOL0CigZqaC-f_Iz=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNXFEXpCUQjNAU6ABZUetQVTfbCFXmu2JPdPEO5vE9HHMr2vTJ3j0NXZ9LtH3okGCJ8UPMTpKOlLiZ4Bd7hbeCZmhryPgFtSHcFkpsuRb-fAa8P-OeWm27b8JBV3TzhLNQbPsKQ4Cxr8CBYBUjs7LyZ=w3629-h2013-s-no' },
            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOkPV7jZQ-1G0STUsP3BkWMsZGvEcpavkInhjVFOOCMl2QTWmRPX7jpxcsueE8E34UKGOkvL-SxcWcNIdLvVG6EFoykLyM9D205UTjBPYgkX35Oo4HbmyGE7C-kGF76KumTZAZm6oOV4cR_NfnQzrmj=w2065-h1239-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNLraRB64GziVM92N0Sg7XUi9ZahtnhMBWAi5Xbd9ndEhaU0X4SSaMuva9k3y4miHkiW1L6xM9-GpaKA6xjC6pfYgteDEMxzaK3AyQhq8LLI-HH40us3QiRot_vn2MWFBySEtAhEVkEmQxInA0_xpa-=w2693-h1649-s-no' },            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPB0kGFGvJbsonB4eAUBJoUeTK4UAMe5ndCheFyKtY9UhmeR_kZCu6ND9xyktj1WosiDq3Xq2qV6dFH4PoYCxMOcIXWD_QDM4MFhFmmCRen_1UV_lLquj2U83-ZEmbEVNCgpT6ULoLAsnsTF3VJ9LO9=w2485-h1129-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMYLdvQB_fsXQ4jtr8blKs_PqpRG5QnzuFWqrf6MpSO7a9qAHmVcq1_TB3tImutA3sl6Gu-w8fUvAbraPEGfDGWtP-cA7G8sTkK8B1T0rMT4hZY_-9XhBYgmOC-4N-oLxdCvJjnYD6DUfE3wZGArwZk=w2397-h1221-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMxvKgmGmccKoxzEobAhVCaGVURSqrmkIMhj-1r7axFXmuq9WDoxJa8UBfSHc4knr0szVH5d3DrPYhWgWdMxh5hKQHA66n0HeFBODumTbm44lpV0sBMBr_JQAq0jvwngwjLoyMhgDc_y_HQWnCxeGr1=w1669-h1749-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczP5xszeA_Hdep4_iOuDUh8LcriOp4VPOpPeRTy450g27-iptaVCxVkjRZOHNXTnuJBSLYAxA0hQ7H9hJQA0peLKG-uE-p1O0hdzVv5QmbbjUYF3cZhuif-fok2TDMNV_PQV8apiXZS1iInWZOh-Kget=w1809-h1497-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczO9V2wm9m1rHAVoou6ug2wfCTtRufjrjcU22c4izeio74y4oXw5LKTQTPwbTodFdzQE184PgLAdc4wBhl3FaAW_k-lLyctX1badIEEZaCx8yZ3S3jqXeTUuuNyeU5O-Oe9JhJnAj2oIczbbGSJbDne8=w2897-h1749-s-no' },
            

           
            
            { type: 'video', url: 'https://dostupsreda.ru/media/files/materials/%D0%92%D0%BE%D0%B9%D1%81%D0%B0-%D0%B3%D0%B0%D0%B4%D0%B6%D0%B5%D1%82-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D0%BD%D0%B8%D0%BA-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA%D1%80%D1%83%D1%81%D1%82_0zWbDIF.mp4' },
            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
    
    { 
        id: 'saned',
		menuTitle: 'Saned',
        inMenu: false,        
        //bgClass: 'bg-gray-100',
        //imageLeft: true,
        aspectClass: 'aspect-[4/4]',
        showSteps: false,
        currentStep: 'tape',
        steps: [
            { id: 'bottle', label: 'Bottle' },
            { id: 'tape', label: 'Tape' },
            { id: 'filament', label: 'Filament', short: 'Fil.' },
            { id: 'join', label: 'Joining', short: 'Join' },
            { id: 'spool', label: 'Spool' },
            { id: 'printing', label: 'Print' }
        ],
		title: 'Audiobook Reader "Saned"',
		p1: 'The "Saned" Audiobook Reader is an advanced specialized device engineered specifically for blind and visually impaired individuals. It delivers a seamless, fully voice-controlled navigation experience designed to provide intuitive access to talking books, diverse music collections, live radio broadcasts, podcasts, and essential online internet services.',
		p2: 'Featuring a fully voiced interactive menu where every single action is accompanied by clear spoken prompts, it also includes a built-in voice recorder and a convenient bookmarking function. Offering exceptional connectivity, long-lasting battery performance, and extensive media compatibility, it empowers users with complete independence in daily learning, reading, and entertainment.',

		hints: [
			{
				emoji: '📚',
				title: 'Formats & Reading:',
				text: 'Supports DAISY talking books, all audio formats(mp3, aac, ogg), as well as text files (TXT, DOCX, EPUB, PDF) processed smoothly via an integrated text-to-speech synthesizer.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🌐',
				title: 'Connectivity & Online:',
				text: 'Equipped with built-in Wi-Fi (2.4 GHz), FM radio (64-108MHz) and Bluetooth 4.0 for wireless headphones or speakers.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🔋',
				title: 'Power & Storage:',
				text: 'Contains 8500mAh LiPo battery, USB Tye-C and Wireless Charging capability. Provides up to 14 hours of continuous operation on a single battery charge, 8GB of internal storage, and expandable support for SD/SDHC/SDXC memory cards up to 64GB.',
				youtubeUrl: '',
				youtubeText: ''
			}
		],
        
        items: [
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNdQUL7x8M2DEJ91s1BAixDoUVXUaUaYkuEEzHFM1V5aXh0UMl7DtJtQ0KS_-fkGsARGn1ncM8LN3OBxwf26dzmpyZE8A8Q11LOkGWafgCR5YmGlQ3a514zMNrM8Gl_fqad3pB0k_qyCcQu8u2CjTwP=w1280-h896-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPfNFUZnMYN0dYTNm_aE-sdfQE9glJmns0aGqnnJDeaZ97P4CzU3E4gBePWmd_hwkt3BRm0_7xLd8GFOW3uNeTNQ-oJNBuXHLKmionGSDABFDIBfw4LtcxJiTy4vaoCmiAQ3Fz3A8pBIxr-4FflxpBA=w1280-h851-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczP_SlamTUmcVf7WFsyGHfZfQvP2MvSoc1cqTmJGrT8evtX5treRNYPUH_mRWBXhhnHqAw4eVN7FpZPl1mFTnkGbMTXvHq2sQMtgJYYG6Ne7EN9ZUuiUw8GBLsv-G9hBnD9SjV_SnMUs_dLTnENr9L4S=w1280-h853-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOowHvOqtackUq8zvM-iqNIsoYu-s6eSMvgPtgby69H9RMC8VNiyYLnmP9-akEU9WuCwwFtQXfIufIqvPQdTtm1-f1M0ADsa02n6nUci7yBNVXT927KpGOakDnoI2b3t-nagwTjaM6j5wt7Naf1QWMv=w1280-h875-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMpMNpDyVJvt4G1Wm1NFwcKKf9xylEJPWMPjMvsQgt-c1FFlyMrJvdSYtfVU1zyUETKDh_bre_wuMvdIstt5qTs1sObK3KH5La4QZB_JnRcZlOH9vRf_p0XjHNgmMAneWVDfKW3bzQC1FV5ZVhXoUlt=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczN-CvrVltcXCSj5ApfuQBAdvfVCownMLZNpX16KkZr-ytTP8FaNpxICTG-Cq7DF7zwKBoIRxO6PPOGM8NQCTsRq--XqFRUTib-G2aEMZtSqtV_Po9zC8fngm-LKF4Z_JqmFU66fruL_mD8B2NfgT_0U=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNS-Wj0LiLEGP_dxCu82TDZw8NLdHMqZKNZ0F4yC17zh8n9EzNpsjaBFQqHRoZFEmd2yoSAfcmaAwDNjxIL34ZNjsC0M9gyvCbQ-Y1WVIbjXdj1X8gPIfDP09-2Vu_Kgq9d1xQfgVx5O5Rs711tA9Oe=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNP9zobkMNLnxTssjECbTj7w4DIUxOeO9eAJSXq3AV145KSVesrEIUXxelgEuQIj67Bs1g8j32wmHYElSk9SZsB0m4agyhUW_fONbjleSvyAdSraO12RZ7JuVRsemFgmz9HZt-Q9LIoZ_AigvTa3ToN=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMAwHwjt0Keszgy1Ls39yF45sP0wH-1NR-rdCCxxy6XEFVeh7ObwE2h9EORC0HxCmRtvWQT35nLY3Lrx8fHJ4P2zFF-aX8L758JVzwIlYLDgv9YCRpfFkFTyPkjN6vBcje2RqvgJmlNPKGOLIRLb-zu=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNlhwNKx2wOWM5DZG-hCvNamAt-jiyfa1b1H9k9z72h8PWdUE6wVfWyzL7z_tZdbY7abfH-ipxi_peE2ebMPvcMQJsaYFjINOcWESlWLuxisMETNB7yQVbrMym6qvFaBniFtd6eYl7m08Ao6myvx6iz=w3629-h2013-s-no' },
            //{ type: 'video', url: 'https://dostupsreda.ru/media/files/materials/%D0%92%D0%BE%D0%B9%D1%81%D0%B0-%D0%B3%D0%B0%D0%B4%D0%B6%D0%B5%D1%82-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D0%BD%D0%B8%D0%BA-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA%D1%80%D1%83%D1%81%D1%82_0zWbDIF.mp4' },
            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },    
    
    { 
        id: 'blindphone',
        menuTitle: 'Blindphone',
        inMenu: false,        
        //bgClass: 'bg-white', // 'bg-white' или 'bg-gray-100'
        //imageLeft: false,
        aspectClass: 'aspect-[4/4]',
        showSteps: false,
        currentStep: 'tape',
        steps: [
            { id: 'bottle', label: 'Bottle' },
            { id: 'tape', label: 'Tape' },
            { id: 'filament', label: 'Filament', short: 'Fil.' },
            { id: 'join', label: 'Joining', short: 'Join' },
            { id: 'spool', label: 'Spool' },
            { id: 'printing', label: 'Print' }
        ],
		title: 'Screenless Smartphone',
		p1: 'The Screenless Smartphone is an advanced specialized device engineered specifically for blind and visually impaired individuals. It delivers a seamless, fully voice-controlled navigation experience designed to provide intuitive access to talking books, diverse music collections, live radio broadcasts, podcasts, and essential online internet services.',
		p2: 'Featuring a fully voiced interactive menu where every single action is accompanied by clear spoken prompts, it also includes a built-in voice recorder and a convenient bookmarking function. Offering exceptional connectivity, long-lasting battery performance, and extensive media compatibility, it empowers users with complete independence in daily learning, reading, and entertainment.',

		hints: [
			{
				emoji: '📚',
				title: 'Formats & Reading:',
				text: 'Supports DAISY talking books, all audio formats(mp3, aac, ogg), as well as text files (TXT, DOCX, EPUB, PDF) processed smoothly via an integrated text-to-speech synthesizer.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🌐',
				title: 'Connectivity & Online:',
				text: 'Equipped with built-in 4G LTE (featuring a SIM card slot for cellular calls and internet access), Wi-Fi (2.4 GHz), and Bluetooth 4.2 for wireless headphones or speakers.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🔋',
				title: 'Power & Storage:',
				text: 'Contains 5500mAh LiPo battery, USB Tye-C and Wireless Charging capability. Provides up to 24 hours of continuous operation on a single battery charge, 16GB of internal storage, and expandable support for SD/SDHC/SDXC memory cards up to 64GB.',
				youtubeUrl: '',
				youtubeText: ''
			}
		],
        
        items: [

            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNC8R_gmBFj1kCfr6Ue3SgQLwyUle_JczVSnyfhqIkmpkytIK4cC2Y19dvPfwZFzuGV4giEeGMAIAoEpVY6PIvolCqFEgvKichvwxQwQlBuQB8qK2jsQYY-yjl09owlBHDJD8D5pK_xychr51zcygt_=w1300-h800-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM4O-BlJqC7HTEZ1QG3udhzc7jnQNci2AkDUGyoMJJCPGL5-klB8J1CJrbPm_LfLCk02YU_67cX397eGB6uUkgrga5bNq3vgpnYaZ5LxBmM6SM-kB2mXwsx8BCsuEr_ttjf3VKJMwZ9tET3NJBgHEyr=w1300-h800-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMhjRiNZQD1Qa3Au-Fi8TVmiacHf8yyJUgJ0ixcPXtyXmLQxlvWhielyuzXwbJJkzbSVm9loRKEj6QwSvV2zWD3j1cNh6eWebpmpsiGtFy5CM8Ih4CgxGqUTd635QM3rG1bgFmfMOzwDR4cVnGK3-bP=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMP9CQ56Q-yOMBME9IZG6UA3vFhxJiAZ_3vaTMzpY45Ken4uijfZjRug2A6j4W_w18alkTIog_j0Dzcq7t10Sc2mJazmTqtY61ezS5VxKVQ-L_-fAJ4zhm_JJqogQ1Xk_9fj6kExNJPZuJV4x-qw8uZ=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPWtjveEK30fTLyAJjQw3SjW3Ukiy2OCoQ-DuW6V8DsS98O5XAsHDUdozjOlqDPjz9k_hdY4cy0Ij8TgpRhJnYpfC4rAetJMgNl157CjqtbAovnPvrpzztdYpQWCeEdm3_oA9B9EuLw_6m1uPo38-Dc=w3629-h2013-s-no' },
            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOxb9n5JsCu4VLDHT5CADt7qto9jOqVPeUn_16L0gfHXxbi-3vkpDkoagfymATAVaic0dVFFgv_wm97swS7C4Y5aMvsxnR_FOj3jvRyrW8Gi3acwkUOhwcfInQDFQngnljxADOraG7UUTRmR1Bc_6qL=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOH40Qb2oUMUVb3rvakBWCGuBX0HfLM1PS1JYVKlfcOd5sA514omvatnmrOcFa-NYD-MCstZalUX6OsRgrAIxELl5TevdWvItGOtOSC5bUqwbK3Fvzd-VjR6sYOdB6rlzVNXVcncbK1JRZnCsZi-t9A=w3629-h2013-s-no' },            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPWcP8njCZjpfUhYuEBEr4nCUnrO5LsL91uOloV65EjKr6LwtjKiVc_NT_bhoAUOEJI43vUdB76EzmRgWEgiutcmHbbGmzQRoX6CKFjazQ4zAblSSXxinLtpovXGtDZuh_DayJFvV46W6jryQKjpJHO=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOwR3-rwQJM6fwS5RuWwvLvjuZIniJOYQ4JvkIvy6rz-EM-KL23XIm4GrMYLauBGauAp4kzp-DXtIcKalPLoOz8aPXmKSo20zFsmVKEvVKCcLp8SXBdk5F_EZegTvkybwHGGr4TXMu8FC7JQKtwX9Ff=w1889-h1089-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPKHwzo31OmAjbVA21m82Snu3zk3vIK-7XGpYDqs9VXfY7-MuldjAGL_mgtEi-IoTcVspaAdMWa0MXwOZry6VuV2SLqAG3_M6yssz3FpLFZR1sAREbVuicTPALlfJh_YcrBKbESt9QxkJYWZs5upiBB=w2029-h1141-s-no' },


            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczN5TR73LFlhsHF66NMDdhVMdIvR9WwYrmXE35X7vXDRoiA3AgOtL9XBOJuKfHBac-XUdelVUKihomLwiTn9TyPwtIzJFgqllmmQ0kBkWX-sT7EIe-rTSjtrx5Wkrn8zuXDN6Q7pkmVdkSA9Hc2VwnLW=w1561-h1541-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPix1lQoMAZMojWH_BJKe9ghhhsT9LhBVQC0nvndJMycOe45jFTLII4e03gS0VVRAca1MQHxkdx4Bjt_ZKVNvWiAhaqhkH79Ayk5BmFq7vsIQMDp59Wa0rAalSijK6gv75J23KWXjIu4xsA8-UBkMUR=w1553-h1697-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOtlyJfxKt3xPu6VGhMzo_uncv7wyv4pstI22JstOz0N8MAgMw0mx5Fy8FWkgxDuTpVyhiP0nMbyCUtR14WmH5WaT680f17_u0TF3G6Le8YUZsJ_MpYv46BwdRaFz75QN46_Mw8RkTzycnLTgIiqQkx=w2661-h997-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNsIbo1tsFqZKAItNFj8mH0IvinAU5OiLXYx64aHBGv2c0A9QvSORoiVAJwxoe6toJ8GSTXZGgr2Fj4xNP3GSzc-uXKrDNE3ZTdt1UkQlvdMcxcFgEUDIcDs29ManH9lwYB8LQSU66VqjpO6I5aQfNU=w2645-h1053-s-no' },



                        
            //{ type: 'video', url: 'https://dostupsreda.ru/media/files/materials/%D0%AD%D0%A0%D0%92%D0%A3_%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB-1.mp4' },
            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },    
    
    
    




    { 
        id: 'miniplayer',
        menuTitle: 'Mini player',
        inMenu: false,        
        //bgClass: 'bg-gray-100', // 'bg-white' или 'bg-gray-100'
        //imageLeft: true,
        aspectClass: 'aspect-[4/4]',
        showSteps: false,
        currentStep: 'tape',
        steps: [
            { id: 'bottle', label: 'Bottle' },
            { id: 'tape', label: 'Tape' },
            { id: 'filament', label: 'Filament', short: 'Fil.' },
            { id: 'join', label: 'Joining', short: 'Join' },
            { id: 'spool', label: 'Spool' },
            { id: 'printing', label: 'Print' }
        ],
		title: 'Pocket Audiobook Reader',
		p1: 'The Pocket Audiobook Reader is an advanced specialized device engineered specifically for blind and visually impaired individuals. It delivers a seamless, fully voice-controlled navigation experience designed to provide intuitive access to talking books, diverse music collections, live radio broadcasts, podcasts, and essential online internet services.',
		p2: 'Featuring a fully voiced interactive menu where every single action is accompanied by clear spoken prompts, it also includes a built-in voice recorder and a convenient bookmarking function. Offering exceptional connectivity, long-lasting battery performance, and extensive media compatibility, it empowers users with complete independence in daily learning, reading, and entertainment.',

		hints: [
			{
				emoji: '📚',
				title: 'Formats & Reading:',
				text: 'Supports DAISY talking books, all audio formats(mp3, aac, ogg), as well as text files (TXT, DOCX, EPUB, PDF) processed smoothly via an integrated text-to-speech synthesizer.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🌐',
				title: 'Connectivity & Online:',
				text: 'Equipped with built-in Wi-Fi (2.4 GHz), and Bluetooth 4.0 for wireless headphones or speakers.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🔋',
				title: 'Power & Storage:',
				text: 'Contains 3500mAh LiPo battery, USB Tye-C and Wireless Charging capability. Provides up to 24 hours of continuous operation on a single battery charge, 8GB of internal storage, and expandable support for SD/SDHC/SDXC memory cards up to 64GB.',
				youtubeUrl: '',
				youtubeText: ''
			}
		],
        
        items: [

            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMkDe_3vGT3m-rTb7LgbESvtt-zg3BA5g3tKqfobk4CtTEx4hDLkRMqMkIQ8vaEmWcR3TwfSlsUj_sjRDdnwjV5EBsAHSeL9n7uyJ3aD3hADgdkYD9YnxxBMuMzG3-JoCAqBFHxWbKe4b8fVuERGgBo=w1279-h832-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczO_g4IoUN3Pfi4KJsdzQ6G-8Zgq6345659GhMEtIPGEYJMeLIQNF4kFUcDnTZyfqQATThgMwRXTQjqtbfBYrDq3dXcfaak3hCzpIFEvqYLBMDLUNpm2fSVwWTR0ySsXRB67lnHm5P5-Ry0JceMUYMs-=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNUcTny5LkZiAy5OSiv2UwScZQwcsKHLBINGZGLGdK8XREUMKG8TYnYkIaDeDaL_D2oUiaAqZIrxYtyMNoEwCJvY7yAyTfEWN-7uMppBXX8IopzqfQLBURgeTya296hSM-qNZeViu3atuFM_9i4BvEs=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczO9ae3pdj2qu7rsMtAqqQWCRwe3YveMliPSVmr_JQ8oLmo_5nCtymByt96EKhIa2-16_M1l7wYI-6_sUGxp_eJdj2UATqpfh2c013maSs2ju1zGL_cZ66KiHhpKT9PmXuCRcN5PmAADlPn8ogbNNfpL=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczODyAo57HFApBjtCkkCOWOOf1zsEkWrD20xU-tEEPfYOGrYUIkmvoeG1P6OvI9LKUkbB3lpVg5DxCCFebQU1nRoL8cChM0QJp7pUZkZzK7rVQKHJpMuWvAByuyK00ZRsgPiduu99JTxCgVSUmxV5D73=w3629-h2013-s-no' },
            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNnBzQO357QxZhfuizFtpQYkjDj-0wItlGNfhVxGp_s2ssVYXhCZoXaWu2r69CaAVjHmnLPXY6ck26LQGe_Di_1C72pw1BWLXSKfBpn_-SCkACDJGRVIEcz7PYkyky0-iyGTvkMfn6YuQg2y45EuFZz=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNL6ALsfIXp5Je8hBbbyzg-2XcH0evpgncQnW7F2KYTKG_uhug4tj9bRXMQlflQqxw6b2eYQ9lOsYU1qgjXQCXrdHh-XbrgRVEyT4RmVHVPAdetpU50qcfwBO2dryV-Srb6YAM5up_14pIUA5V42PG4=w921-h1753-s-no' },            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNbz6QmSS3XYA61vX6SKngrYls0WGthPexJyjF5dibSlmAFBtH4Zx49zkp8FQQIeyuBCmLtHB6KWSSBmRoF7XADIA-ivHjoKbjyXWmYnLl7w2lihZIBL4fBwyzy_vf7vEhlWIAqAZVH5wKOSALDIRsf=w961-h1745-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNBnRz5WRGG2TEahVx1XNo841go8b-zOUl7BS3YQCxUzw7mdQ5Ta3U7xK-JwnyJPabJ4YPCMQKGF9_rwcL6lJktWVWD8UGbBbDrmVmL3drPucfJWwEtC68zPneJsI7o-J71xuvnSBOnreGmTIzNricL=w1369-h1637-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM6djZwqilrlM7lVs6pvNgyrvt0Kd4Zx2KToWl4eX19MvgEfi-dfR8g8h7X_cGNE8w0lnv7WIchjUmhfoydl3b8nEVTj61grAzX_eNt65h5IURIcD8RT5cPjt9wxtDVIJfgFw4c4IWk8Jns2BQEsRoB=w829-h1713-s-no' },


            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPqqwrvOpLKqyMy1OpQXLTLiLK03cZD6KKYzgInPLVhheyJx_vmxdFl0rd4mfBKBxvFvWOoBJSzPD2Xk3ezijOFNCoiLEh-Os-DVBe8PErT6ZLp00DTW8V5P6a8bQulI1tOcFR4lLrJ1KPosgFPbJx8=w1221-h1465-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNtBivlq5LC-p_IeVcxRM--nW4Scifzf8_SJJ8GjElPyK4GPW7RGyer4QgtIeZ4-k3rUL1U4xSibvfaFa2zHgYjxR2Ebqo2n0i8ax8inTZ-TZTm9fhL8odvNu3obEqPlbCZxwIyN60d8HpJ8o973cYQ=w729-h1781-s-no' },


                        
            //{ type: 'video', url: 'https://dostupsreda.ru/media/files/materials/%D0%AD%D0%A0%D0%92%D0%A3_%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB-1.mp4' },
            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },    
    
    
    
    
    
    
    
    { 
        id: 'lupa',
        menuTitle: 'HVUA',
        inMenu: false,
        //bgClass: 'bg-white', // 'bg-white' или 'bg-gray-100'
        //imageLeft: false,
        aspectClass: 'aspect-[4/4]',
        showSteps: false,
        currentStep: 'tape',
        steps: [
            { id: 'bottle', label: 'Bottle' },
            { id: 'tape', label: 'Tape' },
            { id: 'filament', label: 'Filament', short: 'Fil.' },
            { id: 'join', label: 'Joining', short: 'Join' },
            { id: 'spool', label: 'Spool' },
            { id: 'printing', label: 'Print' }
        ],
		title: 'Handheld Electronic Video Magnifier',
		p1: 'The handheld electronic video magnifier is your reliable assistant for reading and writing, created to bring comfort to the daily lives of people with visual impairments. It simplifies reading small text on labels, recipes, bills, and newspapers, as well as handwriting and examining fine details.',
		p2: 'Featuring a built-in 4.3-inch display designed for users with a visual acuity of 0.03–0.1, it offers dual cameras with automatic switching, 28 color display modes, text recognition (OCR) with speech synthesis, an audio player, and a portable, autonomous design for maximum independence.',

		hints: [
			{
				emoji: '🔍',
				title: 'Key Features:',
				text: 'Dual cameras (long-focus and short-focus), adjustable magnification, 28 color contrast modes, and a freeze-frame function.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🗣️',
				title: 'Smart Functions:',
				text: 'Text recognition to read screen content aloud, audio notes for saved images, and a built-in audio player with a voice guide.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🔋',
				title: 'Portability & Battery:',
				text: 'At least 2 hours of continuous operation on a single charge, USB Type-C connectivity, mini-HDMI output, and a protective carrying case.',
				youtubeUrl: '',
				youtubeText: ''
			}
		],
        
        items: [
			//Commmon views
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMnve3i_ybYY_DeQIImx_Ewp3wuV6O889RTW-usXsaNQ8_ezbXYqDicvZRf1pZQNxQcoMBIsMpfcRbqH8RDxdGAW9qvAzkEtWr2P5758oES97oeWRDVKVcJMs3qx9ipOLTnxRu03A7AU1HzXzuAeyQM=w2013-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNCauu0v-UOj_FKjuLb487QScaUAUSEWAh0B1KOzd1sRf49AdQIMsN08eKUWsUgrFRk7wmMu6NFy12VRQbh7Jih0f2ATzOp7siBznBU9pktJxtHim5L0Pa6Zb4v7FuURsJtDp-cPb1yQ2t7HDGqpYft=w2013-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOKySc1ZgjL6TDPy5zBOp8BHzQlq6J8pYCbk83W1sjetfo4jpxnq1agziGsHUeOnxs2QK1ZIKQD9vxYvh8fui4YbRg8dgMeUzCRt6qAgl3OBlx-pH62easiTxYTpwgDr1HqXsuQZFg6hrhs6R25M93B=w2013-h2013-s-no' },
            //{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNxVVucMYpxcn3OpCkWl_OUz6GpicoKfUP4pPRGRSuY8qhSjFJTHsq_qg8HVIb299ciah0pnOqvq8rfm3R3HnGq8P6K828mFi0TImBsIdMHU4ZYB-z9FN2lM6LEUrqhJSk_scmChLbhh9iJc3ssNH3u=w2013-h2013-s-no' },
            //{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMf7r-W79kVq85sEApPXfoaKPaNizKmU3msFKoce92f6lr6KDHZvPAIZt_-WR8iKHQnfJbg-LHovo4S2bjU-O6Qa-y31fB7r4c5qMDJA-mDCfk90UiRvFGTWpZ1MHqCUOC90y75ObjVhhpA2ugazkJn=w2013-h2013-s-no' },
            //PCB & Schematics
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczP3lFkoqGQo3Ne-Bnf8tjuMB4Hhu0Z10oGk-Pda27ym6sOhcYWcyJJaB4HXDDsiUJYVPCm6em4bLwHRMWuV_PjOOaR7vJQGmtSaU93riTYIEBogVq_pF-EidxefLHASyJZLTcswlSShbPZ6XIjXBGHF=w3397-h1884-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMLT8l31zp3EO7PVm94rkif58g1rL8WSIib_68E_Ef-H7pQ9YfTiOSg2ipNgNs4uBVcia3KTlWr7qk7L-VHCm16x9iqlhCBihQqRAEwIUJXH5Iho-aviI4LnNZh5U0C56PW2-qa-DHnT2_YCW6p_HXo=w3397-h1884-s-no' },            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOY3qIgc23yLc720dNzoGMLUCQS4yFORBrVSsaBP858zpg9RS8GwIfXkjw7PhXxz5a5kF4bFR9ujfytNu19kXxKVzBJPhJPST4pl7joihDL1T9HeEyqurn7-0fw3B3DWZQYL_mMaqpEqWJxm2iP_30h=w3397-h1884-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOyXwNtdbUMvc3fp74_zismR_IIKqAJa7K7OhRffrNIFijQar15PLuIiF9vlDR5qtLiAbij-GA3G7eGilh4DWKLHVu79S4CpqathJPSEyiueIPMoVmDD7TcMFKbcJikX8MM8UuZRCqkmZ_DXvyL9WE8=w3397-h1884-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPZsIpr2UQ4pBP5B_PZ4DWnfJhveyGXkfhih13Jse2BUa8KpQBh1zLQEchSRH6i6-ldc2dMW3O4GYq0GT0lsU8fdCJszi3gtpHvSp7llm6FveqnUWT6dFjx9JAuaaK8T3ZWTwWnTEZ_Ov5gc49_w7tU=w3397-h1884-s-no' },
			{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMSd-3HU1DKGh-s0QTUH0p9Zfz4ejP2_5LbdNVaM8n3F0YCYpr4mGgaoQiay_YDHb9rCtAy9z2sd_ofCvHWxQrkg10jvm9EXTKpKq3TMWoJouIDZHFzWYMKj9ToEdftRHf3HRPRXujfRccolT9xmV6A=w3397-h1884-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM6S_FqP9x77dhmFJr53SQHx_SolTu4vG4PQDbRocWrZEZLIQwB3-arwQuF4mvaClwEoeYhCFM_fcRutU8m5oDJc-b8bhevMNv5M-z08GKwckaU6nz0h3gwymRTqkn3fSHq2BOuFK-Bq4wm_tDeWa53=w3397-h1884-s-no' },
			//Enclosure
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOMg1RhasuYijPRm9s6eMpbZBSREBddlTe6g5zDJ5rtStJj3_pB1hfQDKXpbmRi3NqywxApOU1w_jTuWUQpFwxZ7k2RkmiRwOGk50ocYNFozPaJA29VmLDuTRtaWvS1ARn3OxEPDvvq-Qs6yu8SLOqO=w1383-h927-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczP_OD61dn0rqGmF4v6O8J5E9RgZ4rWNj8WGa5Te3OTrtzI9b_HUc-ZtmxJZt9aPVq43Ft7NIJhHZ6Ey8ftmNALittAxzWMBZAc_z9CjDW9YQsufsKJax6yIoUSzpgpdFAxCxxYaVCbbM2KNPK6aVlhq=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOtD29MTGbelPUHfVpPyS6_KGFPXsyE0nCWxdC4xRSEtQX713SMSt56_bBlrwIDXkA8yKKBB6TwfM80SdGx-c7FqMstNVxIE4bgDzGAP13_XIpTp9Dx1_Mhgn5ODNq2RRwkSkGPLhOXWBN4SizmrPCi=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMAYG6LPS4vUhzGTnOmbDIQqcjfSJWvhLNv4MM790x3nDmcyTvlL4x173fpZhdoMPtRG62CNblXHR6XVLDVgVLATAlTGLa_vfogT1MAe6R2nqk_y0znNd0NiI42Sj1HiHvNaAp4x3c9RsSIirRF8-va=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNEqulYknyrLwfyfmW8Grgy6t37JVDHkwh7yPSTAAILFKiH2d97X8st6DCNZ6U0QLmZjNjbZSZ4Ng-gWalXQMOcH8h6CEqaObNAaVaKtBR4uaVg92HsSYTP00-fbFTsGaFFnRshvnMPXgYPGdJsV3Nz=w3629-h2013-s-no' },         
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczO99JYjo2jn6Yj5f8hg8XBgE-9nWcb2u1N4j8suYPqNBIFcz96Ayof8vzEQRqqm1h1uqRpacVbt8yByJ4Tc19zHwjAgC9d_s9Nh9iuVvWHBy0ABjAkdfNuMYb9zEfvXvhcTPwYHZqxWk7AohxVla8SC=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczND38b8hy7ykf8bF883GDdLf7JkMF11YMtYwMxkh7aJZGL0C7YJaAslMdcFh50Dv7R-6mjpbEN9uqXzPh-8tZ_TDsvIPIcrS_QcFlr4dJ2N_P4gdxT9nh8_qENyr0rcu_Q_dXEmJlZZ1kf6yJbHBgsS=w3629-h2013-s-no' },            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOg4A9I32E9OtNh9JSdSix_A4X0kCURkcEwrhBekh5LsmjvRGPLbglYdc7VO0GrjjV9J5v2GDmq1dRzl_Vm2GRbbQKpA4j5VhvHDTNcutzCcKsEUpruAjRGq6zoJfzjiIEeSa9a8PhJbngiY6nUxjIN=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPyQ5FMOidkVPToqhqbaUHsqugqonFT8UQ0IOd191OcCC0ga4jy9MpodSdXMSW6nfqQ1Wr2paczvGmayQx4UIIwajyGFkqQ0sV3kjHe3IToWxz9-6toBxXcg5tVXg0pF2sLJXOWVVfzyOnUw9JZMikU=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPpncDJTaeCPf4uOXx5HoUJqLGf0II4eDSNjU308vgBWuk3OcT4UDQj56xzjWspJ_vxjuKwf71A5jYkHkahVHV2vvJEfXE8Rv7xL4LshNcv-jZTOY5rrinu5ncfd32J6vVieC-TObbbAQhHBRlhSFo5=w3629-h2013-s-no' },
			{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczN9s_Wtjw9P6inNCigN3yVnRJ-qZ5dcbFOx_1mE8Jj3xvQBPs1-GmeZnJ_tY0gLlbSs-ie62F7S4YIVg858gB-rhfD1atlcTMBLe3wyjr63BdLJ90XME_ZL89iHbKM9cYQxedeQ_pN6odCMy3anGlxN=w3629-h2013-s-no' },

                        
            { type: 'video', url: 'https://dostupsreda.ru/media/files/materials/%D0%AD%D0%A0%D0%92%D0%A3_%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB-1.mp4' },
            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
    { 
        id: 'mnemo',
        menuTitle: 'TSM',
        inMenu: false,        
        //bgClass: 'bg-gray-100',
        //imageLeft: true,
        aspectClass: 'aspect-[4/4]',
        showSteps: false,
        currentStep: 'tape',
        steps: [
            { id: 'bottle', label: 'Bottle' },
            { id: 'tape', label: 'Tape' },
            { id: 'filament', label: 'Filament', short: 'Fil.' },
            { id: 'join', label: 'Joining', short: 'Join' },
            { id: 'spool', label: 'Spool' },
            { id: 'printing', label: 'Print' }
        ],
		title: 'Tactile Speaking Map',
		p1: 'The "Labyrinth" tactile-audio mnemoscheme features a dedicated tactile-audio field mounted on a sturdy steel stand. Its main advantage is complete adjustability, allowing users to effortlessly customize the height, rotation angle, and tilt angle for maximum accessibility.',
		p2: 'The rotation angle around the vertical axis can be adjusted from 0° to 360°, the tilt angle relative to the vertical axis ranges from 0° to 90°, and the height can be adjusted between 700 mm and 1200 mm. Equipped with vandal-proof buttons, it ensures exceptional durability and reliability, while the number of built-in languages can be customized to meet specific client requirements.',

		hints: [
			{
				emoji: '🔄',
				title: 'Full Adjustability:',
				text: 'Features 360° rotation, 0°-90° tilt adjustment, and a variable height range of 700-1200 mm.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🛡️',
				title: 'Durability:',
				text: 'Built with rugged vandal-proof buttons to guarantee longevity and reliable public operation.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🌐',
				title: 'Multilingual Support:',
				text: 'Customizable language options integrated directly according to the customer\'s specifications.',
				youtubeUrl: '',
				youtubeText: ''
			}
		],
        
        items: [
			{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPGif5PwXyUCBVYFdNg4jwK7_Q3Zebjbi5d30FVM9xN84Um4Xvu8dQKhjrvWZUF8sHASiQD3RGFqRpD0yrlv650EOv6czN73U85Rr4aHt8Iz2nJcvZ9j3hN6_UvBY0Se4sqy4aqVzW4tGu4hT8fa5_V=w800-h800-s-no' },
			{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM9eK-WyNp5JA2UwYuT4T5R-uAufrC3-QfN9k1Lef0Q7EgEgmMf7nR_9rws7VohOiyP2p_mGw8cc_KpttNhcAXgUqiYnjcEsu_njUQ-e5rnD1pT_GyYkSefuISGfSxIKqAnd_avVqFxCjkffI18LuEv=w750-h750-s-no' },
			{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNjCdp_EPl77TailSyrt-N00hjInktGxsIS8nX4qvwBSvxIJY_czdgvCj6fprSANpoc60yQZClbXlyCzOEbee6VbOKRhfx-EPwFJwHNkA22l4ahHdv-HMSjld2mazKmm8gfrq-vrPDnvCi58jMroL48=w1000-h1000-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPG7inwGoGQyel1RUaValmh-1p3fZFSzqaBKa3oZWyGlcytxwhzHTne8hu9lp9Z8Y2X8P6Shsh_U3nkfMgFzuOE0M9wUZ6C9qIt2gaJ7Pc2vQByqYH8j34BtVeNpPqvWdPJiaAeLNr7jevdNTx42PIN=w1920-h1920-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOKv1Vpe9aEqp0f5T7YaFgaUkUtEUlscIC3M7GFvIhZ92nf6AnTRNpVSSDS0tbjxePSZfrXIKSq8EU87UyUvaHSq23txYYy_MIIWbNSGv7h4sNI6Pyr1uqpuHV18FAYlWpVc9v-FzNVhy3XPdM983WR=w650-h650-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOIab7nbtyCXEcUc4jmsnqtdymh9ynvYK43tJTzdsXLuVsK8B3-67qRn5eN6xX_Ju4CWT-v7Y2h8DbSdD78h3WuhXymbGBhMc6Ene6u5x6u4x9cHM7yhFr0-sPrfWOXue6uBIk7mg6sBd-nzERlGya1=w1000-h667-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPDmOPxM7zR_JKwoGL67kWch4KnshO6fgAGsKb6i-HmyFkozPk2tBS7ZZdvxK9rjvphEjtCQzxGnw3hvpzld1Y55Uv1UkL7I_-qK2lOLBlE2Fwlnm7-6SHsqUsTYSFF35Da1cXkvifeiyEiIkuqrTtx=w1000-h667-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNwCCfYJi7Wn30kLY-fQYHECiMrZEqvu3lmW8QlfUaSjMMWaL0zgUoGCgsqls6gZdJcxZQGrrUXG15vxaUk__d3-tECL7Vd91c9SbvAAM3BO2aOFtjgmX04slozfPKUjp6CtoeJB0mSbZl5PixckZxu=w1000-h667-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM1ppgg1rb07H-rTqPgP6YM4-AFibyRF9o_QMhW6xNNrSpDRdtgBQXIeG619bCg8t3d6p4DHY5T75CyisYyqzjC6tIKnrFBwPtRTh2jgrKLbI4zSQef3PyDwLmu81AxNRs3jeT63ASBiOC-lyVdEefK=w1000-h667-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczO14_XsvTB4HiWTIEmat86UV5B5qMUYf48y2-1IamqkkKE_t1fAQehWPGEyw1qG7rkdmMQ0Cv966GZJc_se2FtpALDIMtpjZcFiTa1VFKlNNwsHTQPxQ0GmWmJqEzxcD70gZ5N4YbeFkT2YcUQf-Kky=w1000-h667-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPrtyRDw7PAIEhfczEB1nK2E3ATgeZUx6xVrq5uWrWoe-b1FSO_ygaC-uppWw_dQkNwyqY_ZwAptC_Fd462YMBFRJzmCATuavc6WdQktGc1OT15XHnPRYsrYPROxgv2osKbyPnwJw6JLW3s4WtbTrAF=w600-h600-s-no' },
            
			{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPdEVLb4AAv3lmmUvVR0ejF2W4BIBmFxK3AqZFhuxEC8RZ_rQoH42PdU_IGA4Wu_DwApgnxKQu4ynXoDZIUPSR0hIbEleJI9RGNWYHVC32ux8jrv9iJ0JSMEiQUughOY24MGx0Gvw3EnAoB7uEgpVOW=w1603-h1071-s-no' },
			{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMuf1D-G9uxm73V0R0kHrAkIHZ5aiUZJPZSm1LNICsngCGf3BNQ2oEpNtg8TasEUtNX_yAE3OHtkZvtAynHq5BlU2HcAKR98k_udr9eWoq8vpB0sG3ZaljpXRwIP-t6FRu7KCVThiJ6toZroVvQGSKo=w3629-h2013-s-no' },
			{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOuC32mRuEZsOtJstFgfTHXbbGfGOLN-X-YeJrZv9C56JOKtb-3SfpA5GNGI68u_g_Timf19Cn0-bBFEwhnMnNTBviY6kPlG32jLiwbhha6UbtgV247Bz_CdbovyUHL324hmi59JNWqzv8Z4KDmOh1q=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMAe29j-1s60Jg2aWI5_opCDEgQaOFsvFc6XgTiIqVO7MvnSBth6zCDeFznfcPiPiQe1HbQZa4GObSTvxfMNcVPlfraud2z_EjUdyIcQzCjG4d4KHDwNfX5h0gX5lnKSKhyfNSd-mnPdQ43bTyQdR-o=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNBpegnJLGc67bcBSSj3pzsU2Z1J_9HMs6cpC2xkv8n9PEDo1GjzAhTOarBkBDHCjC9-4-wAbFrOJsEu2LOPlSWO2XYVZHU_9y3X6bioE4M2CHmurpNrR9SgoA-w5rDmDf-i3Z5Mdp-NFKte-KaXN7x=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMnu1NWz71mx8fYXpNhoOcxO1KXg3_s46pRv2eCVVWVOGZaR0JSp8n6TzyrDePEXJ5dQ4kqfyH2-BE-eJLkb9UrZnHrujHXMurZVE7L6z7aKjBSjxAxwcB60d1OeNxFjsaxMwTeL372ao2qjP8XvUXS=w3629-h2013-s-no' },           
            
            
            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
    { 
        id: 'bpm',
        menuTitle: 'BPM',
        inMenu: false,        
        //bgClass: 'bg-white',
        //imageLeft: false,
        aspectClass: 'aspect-[4/4]',
        showSteps: false,
        currentStep: 'tape',
        steps: [
            { id: 'bottle', label: 'Bottle' },
            { id: 'tape', label: 'Tape' },
            { id: 'filament', label: 'Filament', short: 'Fil.' },
            { id: 'join', label: 'Joining', short: 'Join' },
            { id: 'spool', label: 'Spool' },
            { id: 'printing', label: 'Print' }
        ],
		title: 'Talking Blood Pressure Monitor "Tifloton"',
		p1: 'The "Tifloton" is an innovative automatic talking blood pressure monitor with an integrated non-pharmacological blood pressure correction function, specifically designed for blind and visually impaired users. This unique medical technology combines precise blood pressure measurement with non-invasive electro-stimulation therapy via a wrist cuff electrode.',
		p2: 'Daily 5-minute therapy sessions send targeted electrical impulses to nerve receptors, normalizing vascular wall tone and improving overall blood circulation to help manage hypertension and gradually reduce reliance on medication.',

		hints: [
			{
				emoji: '🩺',
				title: 'Dual-Mode Therapy:',
				text: 'Combines precise blood pressure measurement with an automated 5-minute non-invasive therapy mode.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🗣️',
				title: 'Full Voice Guidance:',
				text: 'Completely voiced operation for both measurement and therapy modes, with adjustable volume and headphone support.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '💾',
				title: 'Data Storage:',
				text: 'Saves measurement history and therapy records directly to the included flash memory card for tracking.',
				youtubeUrl: '',
				youtubeText: ''
			}
		],
        
        items: [
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMFXyFMmUAnrr5uQEtGNdwFvOl-w0FBhR4191J_O03zmG1C968Ym0nmHoj-bORY1THfa5JCwASQluSosc1K5oPdwYGZlI1QvOQO76I1dmiskxyO-ZYCNF4pAekdltH_RuvVNajapmvgtnpOFsvhM3Gz=w1254-h1254-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOksJ36cIo_RQ4PKMsDrWpZSgUM3wV3HEC6vWX2DemxHj67zOYeVhZcdrovdWochGglxCilX20go-CzV5dBctY04E-rH0yXF5T1cbljHmRoNcWSmd0BXre4MRixlNwqEBhZLJWoBUQnsWo1RLblXNSp=w939-h1136-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNBX5YFbUEEBA3467vDv8J1JAKDTFE2CoUkr7UmXiSdCVXBvifldR9rgnAutwx1HnaQ7Nv5fjX3pqg-jvR_exhdHg-yw56Rt-hO4IZyMRp1iGOT8CSZvoVX7R1pTA0uV65YCeKC6hcEf6Z7JYU4U6gv=w1024-h1024-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNs0ldRW-rrHmKO2689b___Rk711NxjPBZgfMJ8eF0u7MSv_EIKFUbk7FXWKhuy4FZoajdBORDj8C0BojkH0m6FTwN1kkk4W0wIuwnEyhIA0fPXjWWJn8Xn2L37gUsTAZIviNZO5Wt1kOUIIrlvr4kR=w1280-h844-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPmiScynaRvWWmJqKt1PiwWbDgOt72MUUQuph2TUD5eo2yCkoPrQNr80Yb4diX-gUmK_R1BR_l4fzX-J5F63xNDB2r1SeDbVrHpL3wNHoXRix6-NiQTwqc1cg2Z6PqhwewxSyUeBgXqEmsy-utU76gT=w1280-h844-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNMfKc77w4dMYzmi8idOb4DKQhvYgcxMXhlH6hpg0avMaGSMAJxM02TQLBwAzIi6mDCL5LYI81WE9b7Mc_lqKwMgHaUdAsJ5YZgs2wB8JlzzIqfAaBbyyiESPFW-8ysro2SxcJ6gX2QQMbOQPEucF6_=w1280-h844-s-no' },
            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOUpQWPc3fCKPQWX31_DsteCSowMGWLn4J9TetrYzmdyLJokyep-VcOQyvyG_debnPl2Xa3ZOoNas-PWCF2KNp_CQB7fV9Tw3xQCGAQI5CrxU8qO8dFPgqy2O_FnL2WYYvO9P2n0h8-yfkqSoThb_hx=w1499-h1203-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM9n4lSxFSjb7em784wnu1z1KFHePOwv2BkGq5F8Cqtnrsu14vkI1vJHLwuu46UvwmRX9_I2YnpL1zQhZ0l3RKlNgNd8ZDGSBUQ3_8lGoMeqvW60SxxuMRn1B_PreMC6qhSFoZ4bGfFhovw43oW7vTG=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNL__v76oRrOTWCglcht7VzL9cz7TFiVizT-usLL6NM1erB1DN-GMuGGLrIxS6FmfOsiqrpQKqSShxasprUkOjeGSa7H3miQukHl1rmMnVSTcb7KMti9vcOuVmq33bVlQFwhEji-QjTGUfvcZXfJaz-=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOL5IKv7M5q9dYeAuetqT69Vf60Qy05nUoLgMpgVx0J2Hw69VKi6w7OKbdhvI9jkJc1r-H7ZF5_PLTaZ-llu4TKSnpn_gqVFF3nvH0aSoV5Vf84oQKOxeuKFOwOb501AC0-3GqpsKsHWKnQyXfKDagr=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMzaQr4UjEUZ9CFAl6FthsgJYNbtTaJ4zWiPssGEjBZhcN7MSraXE72cVibC3-KwOJ7zdTt10msaHed1ZAjjTVKAh_vGrJbJNnmLdbZbon-v5cM1dyaAIj0Ksjqaprv2CBC83LEthkZl47mVt0zUMqQ=w3629-h2013-s-no' },           
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNoNFfsQ7J9MiJavq7J69hNyQSCdFFUo31PUdq0U0FFtVJPGMMHdvFfi3KVFcbgNX66LnMlf1Pu3Qy_0K_P28Ec-6uNTLkeKO4eYrOI9I1MWxfGyEFpuk2LLZVKca0rqR2F7AsJekRQsoHWc1SlovDy=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNRAnzEoeKiVW9JtBdfBRO-ftp-NuWbJepspj5H11DaO7F1TvqyBpwQrPnUuKGEyza_c7AN-_DUTbzhFd25soShrv72rCuAFd6WW38pqyNqVnq8v5k7jXWl1RKCRkZ-QCkQz9E_p___8Iw-3_W9mHpA=w3629-h2013-s-no' },
            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMy4UC8dof-G-DKT-ph7hV614fES6FlEramJRA_qpFTZ6oV39YC2nKY8v-6W5dsm8fB-WEK7IOsRNb72Ea7tVOSdGqLyJdp3my1T13Q87LNslQ233W2P_xZ7LuBTtX1LWg6USprXc0LQpUfbFcskonJ=w1393-h1521-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNWlDw6hsz8CRrlgZPAdvhf116ukpB5Edpnr25Cv1h2MuX5_adCb4gQQ6TbQ2bJEcg0CEwDMxB4cTzNb9ftS4__feZvdBS0bMQt_XaOAeGyquVySUw5Hwlmlta1UrzQ0G8m5jg6rp1QEiZTn3N2BNgL=w1059-h1124-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOw76-Lb2u3-Laqr2KJoEgOeGfGWHx4YqZZ-HwHZmF32dbIvWVfFdl0q2Brj92SrmvovKeb_arSdJapWAM76k_wUThMAsjKcb99B7SGcYssPSj9qkUpNvbyFR-c1Xm_Q1CxWlmx8oATFWYLzA3NuBC_=w1624-h1231-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNATHQ7Ay8GYvSGAEiGv4-kQi40ZcVgXcQywrKTYYT9QkFxb4yOUA4JUrqR9nimvJVek_GaMPsa5Ecv_5uu3KCIafdtWbs7yQclT3IUxBMhg4gIkFE77Bb4QQHD7lFm9EDlPM1Lkst06ziKHNPQj9JM=w1507-h937-s-no' }, 
            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNwTuylGtDlrzSk6JVsdZOgGIrV859Q2OmWAl1neSCeuoXN3kRztlg5x1g8Ag2bdpqS2n6S_YzlnKfGua1f7SR04Ggjrf1gl1CyeHna0VZuB2inMZhQDvsaGr-TLLknABRdFkP-oRQmAw_N4pdRHuXb=w1559-h895-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM0uaGVxG5egb6JeLnUYI9mx9gmQsZ_GtroMwj_kux_TSwskTbZ1iTqRjvSQjBaa5HaR9dTNSCFJ-GFLsYgu_5dQyOrg3ShMIhmzVJ7VdYZNz9yTGuf2pDNeCetPLyTBdy9pgIQMGTwvwyHcitarj3Z=w1629-h1801-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczN_TVppIirJkKRg8upcc8F3WggEJBb0ZXe6fqJK35V3iZvn2vFGzZ9erH_JbWmybC4uJ2r8Z9tm9QAF1ljAOlEX-Qr12m_VAXKW3A4ficLMJ88zx8Cf-cy7ankhMcMmpcNJeuJxJYYWc3kc-bbQtx0g=w2571-h1706-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNmhcL-003tozq9cIkqEAhZOXdLrsUd9NZDvBLqZuIzeLuQMBXNlMnIxfRcOpm7UNkL5WQHePQ4kuvnN2ZN7hrDb5OsrpA_xwBf8jFC_GYZuPjegE_mwCtkhFIS4N2E9jY7nZFwv89MQYZrMl8dY84X=w562-h800-s-no' },                       
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczP3Aj7kHLP6vN23uD-C_xlQ2Ip-AbHKYUQgvMOd1fnbR5Idop89nzrBId3EGoxKIECTtGn1j2aInKsVAyW19dIidgsLZYXsNykPUjvXJxeZW_XAFbszEaNw1m07VMaSAUXLuy3rIA2-0PMFgcDcmW76=w759-h555-s-no' },  
                        
            { type: 'video', url: 'https://www.youtube.com/embed/4ymA_2buJZ0' },
            { type: 'video', url: 'https://www.youtube.com/embed/VbBEVBd04SU' },
            { type: 'video', url: 'https://www.youtube.com/embed/9ck88ZL7JQA' },  
            { type: 'video', url: 'https://www.youtube.com/embed/vH6aYH5--d4' },              
            
            //{ type: 'pdf', url: 'https://drive.google.com/file/d/1WIUw-T5Bs6EJUH6hmj3C1r9S4iSmuF_4/view?usp=sharing', title: 'Download Article (PDF)' },
            { type: 'pdf', url: 'https://drive.usercontent.google.com/download?export=download&confirm=t&id=1WIUw-T5Bs6EJUH6hmj3C1r9S4iSmuF_4', title: 'Article (PDF)' },
            { type: 'pdf', url: 'https://drive.usercontent.google.com/download?export=download&confirm=t&id=1Q1vDmfcmrTQSMCtIJvE6_MMx-7YihwHL', title: 'Manual (PDF)' },
            
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
    { 
        id: 'braille',
        menuTitle: 'BrailleDock',
        inMenu: false,        
        //bgClass: 'bg-gray-100',
        //imageLeft: true,
        aspectClass: 'aspect-[4/4]',
        showSteps: false,
        currentStep: 'tape',
        steps: [
            { id: 'bottle', label: 'Bottle' },
            { id: 'tape', label: 'Tape' },
            { id: 'filament', label: 'Filament', short: 'Fil.' },
            { id: 'join', label: 'Joining', short: 'Join' },
            { id: 'spool', label: 'Spool' },
            { id: 'printing', label: 'Print' }
        ],
		title: 'Braille Computer',
		p1: 'Braille Computer is a Intel Atom Windows 11 based PC for visually impared people. It runs famous screenless computer control software, such as NVDA, JAWS and other.',
		p2: 'Braille Computer allows to install and plug Seika Mini Braille Display.',

		hints: [
			{
				emoji: '📚',
				title: 'Formats & Reading:',
				text: 'Supports DAISY talking books, all audio formats(mp3, aac, ogg), as well as text files (TXT, DOCX, EPUB, PDF) processed smoothly via an integrated text-to-speech synthesizer.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🌐',
				title: 'Connectivity & Online:',
				text: 'Equipped with built-in 4G LTE (featuring a SIM card slot for cellular calls and internet access), Wi-Fi (2.4 GHz), and Bluetooth 4.2 for wireless headphones or speakers.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🔋',
				title: 'Power & Storage:',
				text: 'Contains 5500mAh LiPo battery, USB Tye-C and Wireless Charging capability. Provides up to 4 hours of continuous operation on a single battery charge, 64GB of internal storage, and expandable support for SD/SDHC/SDXC memory cards up to 64GB.',
				youtubeUrl: '',
				youtubeText: ''
			}
		],
        
        items: [
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOXJPWITf8oD1nL12JIzofw5F-UKQA68u1_00hcBUBypcwEiKgq-ZiiUANT79xWUw3IZFiHL78whf5U-PdrcVU7zHhX2HjFHd0wL99JrpP1Z67LlfmCfOkuLTSIl-IPmnqoYrf7qEyZZ9BmTx6yUpHP=w1864-h1028-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOsZoulXXuMp4F9bM3s9U5JOfJWAG-GivALFJn1nSnSZ8tTS2JYJYVw0HE0PgGGRLaTjS0DIcvrm4sJxpqNaXvqERtMaxwXwqeLPZpORJ3IguhcC_DqcY9WRlQ-qTey8yuSU8geQk6P8WaFsY_rnAOz=w3397-h1884-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczN9KKrsTxjCyWXbS_tOwmgQYjsOUFha-Jdp_STu2ezZbRGMH5T-3Pr0SePKzVmPoCI8auAdX4RpNhvIXjlZeOacGQ66aHjUR6NK80cECLa0xZsrPREMSVR9sykte4M7itw6RkQ0DRPikV-yBlhnWsSd=w3397-h1884-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOJcTZx0MkZf5yl4oVv_v6DXZYXLcXaU4Kxi_J8BVastChkARQtRU7rVpSaIsA7gFHaTp9XDBYTeO98s3xMhWBY2m2MvRxurZnwqt4OBKhFpU5HefCuRfZx12RtYmdFFWTN1SGWjxdz67cioYcSujQ4=w3397-h1884-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNaFw_Xy5gwqXbiGWY8qgLwo2-V_oMFdxsB0bcwQru7Xsyh19jwHu6C56l_KfiQ0KsAapw8LmGUqdup8XE9YEfJWdb0H5fdp5HiGtbr2obvOtj0oodnE5GffSJIwGv8gcQ8wrurTPZEBHEyPxXtMRaP=w3397-h1884-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczO7vx9825ADAaadrO8IQzLiAujhntk-ry42d9NtAUclTWuuRW9nF0_XiyJDcX1kP5YfWTF-AWdxxAP7kkwzVt8DzbDuCzoAlYt8Uq6xHPk-w7S4RSZ7utoGwT31c-SBYR60IcO3iLtjobiE-hI-9szr=w3397-h1884-s-no' },

            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
    { 
        id: 'ils',
        menuTitle: 'ILS',
        inMenu: false,        
        //bgClass: 'bg-white',
        //imageLeft: false,
        aspectClass: 'aspect-[3/4]',
        showSteps: false,
        currentStep: 'tape',
        
        steps: [
            { id: 'bottle', label: 'Bottle' },
            { id: 'tape', label: 'Tape' },
            { id: 'filament', label: 'Filament', short: 'Fil.' },
            { id: 'join', label: 'Joining', short: 'Join' },
            { id: 'spool', label: 'Spool' },
            { id: 'printing', label: 'Print' }
        ],
		title: 'Induction loop transmitter',
		p1: 'An induction loop transmitter (often called a loop driver or amplifier) is the core electronic device in an audio frequency induction loop system (AFILS) or Hearing Loop. It takes an audio signal and drives an electrical current through a perimeter wire to create a wireless magnetic field.',
		p2: 'An induction loop amplifier generates an inductive or electromagnetic signal that can be received by hearing aids with a built-in telephone coil or a neck loop. For this purpose, an induction loop or induction loop is needed.',

		hints: [
            {
                emoji: '🎤',
                title: 'Audio Input:',
                text: ' Connects to sound sources like microphones, television audio, public address (PA) systems, or mixing boards.',
                youtubeUrl: '',
                youtubeText: ''
            },
            {
                emoji: '⚡',
                title: 'Current Conversion:',
                text: 'Unlike standard audio amplifiers that push voltage to speakers, an induction loop transmitter is engineered to send a high-integrity electrical current through a loop of copper wire.',
                youtubeUrl: '',
                youtubeText: ''
            },
            {
                emoji: '🧲',
                title: 'Magnetic Field Generation:',
                text: ' The current flowing through the wire loop creates an invisible, fluctuating magnetic field that matches the audio signal.',
                youtubeUrl: '',
                youtubeText: ''
            },
            {
                emoji: '🦻',
                title: 'Direct Reception:',
                text: 'Hearing aids or cochlear implants switched to the "T" (telecoil) setting, or portable loop receivers pick up this magnetic signal cleanly without background room noise or echo.',
                youtubeUrl: '',
                youtubeText: ''
            }
        ],
        
        items: [
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMUg7Pe1D40FQ2DRkPZW_Rw4UNVojhWiyi-I3RJT-aJR8pkKha3_r09u8jw6VIftMPpTWiC_99QmaS55R9hNioJOYWS6Mj_-1mgj9SXbdSgNPNhuVwWdtEZ8DfA-bItuRzbD4sBl19CnGKJH_p7N36g=w718-h1080-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMkvGo7acNGUs0o-HqFaIK-zExow0VurwlGi5u1q6QyxrTl10CmhGFWz2Y6TIxM01YikCP_-GC5vtMdkzfDX07c0ppEmjspSRwtkikVWoiZ-tv4E5Ik64Wzbp6IP03fm8SJf9gIonaX64G9TRwN7Bmc=w1623-h1080-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPpaUeHxHjD43okob39uvVPflo61eBlv7nlH1kQ1d5xIhuGlCZxiWGC2mJaQkC9YljO_bpa9v_9iuygEdTl0WquRUqkK20QBdUvDDAd2mhjaMtX2OTV4D1nm0Vj4Wa0qqsvPNNcvhXp0H9gr8bW-iwW=w1623-h1080-s-no' },
            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM-LKFj76M28BGr7tnFEFnw-ivxY8SJ9cld-dH_6jNFoyEQr9pDZyF_9DBtp8JBoPNh7xwoYyVl9NzoP5dSBDdzU1VlMrVZblIc5fibxcCFLlXQR92W0CX1W9jIqiG26EAqL4QC74hPL7MWCO2eSG4j=w1623-h1080-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOibR477eyePyWzwGoxPDal_HHPKjctHEUSPYhxJfsbBqoJuPoFcMjGBbrqB_mgNueeEcXGPYbKJLcoPy8XGvjTsQWBq_dCA04-pnVzNUCflvNNs6StZAgfoKQWhCLC_r6SCYEPxcfczxAMQn3yLoeB=w1623-h1080-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMwv5js5FLTAhl5j5AAD5IW5JJ5wB6O_LecZYzac_qIrmN4NYuxCYvYRdNaSoDi_Tep6smjHBJ1rInYjJb-H49O_Wj1pljraghNxVcBhhGGkiAtg8MgMhpFn-OvCqV8dnPl24nhaSiZ6ns8ppESA0lg=w1623-h1080-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOsherARr20FXqfkrIJD2Be3ro2iOL3rBDnPJZMThKMxU-o7d3oiRAo9Jw5TiJxfXLuCs3ccLoCm3rAWBU7uVPS5au8eB5KyKNWrRTdRzQX2052FaV-W_g6fixjoyDnoq6XmbWJEAJigKoks73tt85a=w1623-h1080-s-no' },
            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMIfeCx3TMXB4y81s5CCauz7KPYZ2lLGs0OscD4ujn_PjuqgqqRfBfLh5LhNbkMQI7uz6g93H-I-zhB_k6vxNx18juU2F19uxV5yETrVWoYr9lK-5dnsmfu4QafZs8DazC08Vg6MNentfRjbJAFefeV=w850-h850-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczO3VlHN_lsPxJgrG8Oh0oyU89XKwKxjXWOspnzS4m5WJMeWfT5W8wf6nh3lJBcAX_Uahkm_o454U7v03oZoFTUJAo2M8J2xuH8XByE-d32sVg9Vtkj4cyBaKZDewVukjcE4wNZBIuGl9w-QEoANsiEU=w808-h575-s-no' },                      
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMKdtERoGrS9hDUxi5hFkxkegTIh3MQAG38xDKWLsKosn9nwxaZhyEzy6YxmL3IYkKqRDFZKpNROp0oRduXY7dIjE28VWusRXE8dy2709rWSXV8V6W_l5Wp3fTaNj9ukgA8meAXmf9ZPx13L_nj2jb7=w2013-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNv6XrsOkobWjC7wyjZnyl17vMwDmKAGDj0TIZsg-mfEFgldZH5ao-ZbSY9nGkw78wlLJ4TdXCx1pQkWqjGGAyFFasDPLw3vrEFU_DtTzm8ysCqn-fe96TjW8e7jLewrqwVAnf5C910qCZM3z7I7Qkw=w2013-h2013-s-no' },
            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczO9NkWJU9LAC7Dm1rnjyAF3Btb03BnflJBiRqCH49RfWoYEzvIUZO7VmkjrLr-3yIVLUig9mAqgfonxQOuJwQvNAHC1cc4bD6OfqwkF0MvKyBIQxVvlAzghSf_2eh9Xv9kCBOVNpbHglGRE7O8a5gy_=w1739-h1080-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPm-JWyd5MXHNgS96OLsgdSHACDTRdhOiza7VSdh4GnlOhh97AZ8-_KPO3SwQLAo4pMSG0RJX9uvgSclSbK_YsyI36zhq_XJLnwup1rulMu7l3xFR4oWf99GrevRPkbhOc9y1Iyv3bwCVz1QizpMJ6k=w1024-h642-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczP68ckMBpCi9N97yAI9c8PHHPyYHXe_RjIGPV9QQfkSRmDE8aNYOi1GGoirF4vDXnqqn2qiShpOjSKeEAfcpQrKA0NhJab0NwB2VxFv8t94xF7qFiedPBuSihmaKkvOTiO61jrUJ5G4CaWoLEG2UdoD=w1269-h1080-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMeX-2a-T0Ygyrdd2QswmPd_7rD8DoRGKZsRTnPmllQTCLzcvLslf6hiwZ0BD3lHg3-38xhB8GDaKDZg-nSQvZVT-TaRvb62Au5vYevfuL14sWV5SwXNbMrKSA0fXmPbUzukyT0SdmLvnUliEqKwYM-=w1056-h1080-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczN8845SQKLCnNpii_KOyJAaB8WPseJQ2Dvj8rRHpZ4xmOKbCp71QM9E-z9PjXVzsCc2jXpNv-GYaztKCn2wcMm0X2mo5eJ9kj8-9QXVxEDMYPyu52WJVmkEbVbgB56raflLJ80RmY7dafQrvuRymH22=w1152-h921-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPGqwbeWf1J-962ZSyuaQHdgo1nYBth5XIouZy17tJJzEy1ndXOcFU6VTjfBNaHDuLusyqLrGZfvTogsA3qDMvaHddJmA25r8Z6rW1EvsqaTWLqgfSefaK3Qg3OrULHAawHuGdzBTQ9FipUMrp2qYcv=w1000-h707-s-no' },
            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOwYoDyaQM5unkfu-hXL4BEuU5dZNn3gvgvfgfNAELwHP9eQj65GdhUhE95cy0cbOiq50eU8Xa-3W4FyHSxj3zQdeJ_n6IErdSmXL5mFLJJbhAgZH7DHvEVAk7QfTXKf0p4Rk6fWiBBLKLr7MXcoiLJ=w1400-h1080-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPOWKP5JZr5ZwDkPEJ8H4dIWPxQBzyNEJwANms3-zGwYuBR_2uTkSmWEEzZNV6PIppAf4tMzFqQUvT07ebZ_0L2BOcyagaRS6lKoo1NXrTV6Ed5YcM8Rlh_Ii8yJtMRFO7qx8e_sXFk0Y1QAVrObBwK=w905-h1080-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMeqQy4oE4gwDSoCYRRyTmwUcy4f1UXm360Q9XY7yg4G52j-i-7SKmZW7Mylo8CjZPbJaenP73CSD3Zp3N8CM-ndrcTa9-m_NiJ9zx5Rv5Rx-QAM454d5xkGNUvoFxIWny9Olhdx2GILhXE4lQo5kAc=w2371-h1275-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMUKpXY8l3k3vmBfLGmhFX-ULt73677wkO2mLG76WwPr1eRKHO1p6XVTevtkUuAV_C4MyquxPxUuKZYIRiGE_T5iw0CsCT3KyEPttVyOdXUqn-wgh2aqtQpiijMYVJLs3yPPz1nt5PlZA0uc6z84AKm=w1920-h1080-s-no' },
            
            

            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
    { 
        id: 'radiobutton',
        menuTitle: 'Callbutton',
        inMenu: false,        
        //bgClass: 'bg-gray-100',
        //imageLeft: true,
        aspectClass: 'aspect-[4/4]',
        showSteps: false,
        currentStep: 'tape',
        
        steps: [
            { id: 'bottle', label: 'Bottle' },
            { id: 'tape', label: 'Tape' },
            { id: 'filament', label: 'Filament', short: 'Fil.' },
            { id: 'join', label: 'Joining', short: 'Join' },
            { id: 'spool', label: 'Spool' },
            { id: 'printing', label: 'Print' }
        ],
		title: 'Speaking Emergency Button',
		p1: 'The Speaking Emergency Button audio-tactile information device is an innovative alternative to traditional Braille signs and pictograms. It features a tactile button that, when pressed, plays a pre-recorded message. A key advantage of the Speaking Emergency Button "talking" sign is that messages can be recorded directly, without the need for SD cards or flash drives—simply press the button on the back of the unit and speak your message.',
		p2: 'Where can this device be used? The Speaking Emergency Button is recommended for use in socially significant facilities, such as schools, pharmacies, libraries, theaters, nursing homes, hospitals, and rehabilitation centers. Different RF bands and protocols allows to connect this device to diferent Smart House solutions',

		hints: [
			{
				emoji: '📚',
				title: 'Audio Capabilities:',
				text: 'All audio formats(mp3, aac, ogg) include recording capability',
				youtubeUrl: '',
				youtubeText: ''
			},			
			{
				emoji: '🌐',
				title: 'Connectivity:',
				text: 'Equipped with built-in Wi-Fi (2.4 GHz), RF (433 MHz) and Bluetooth 4.2. USB-C connector allows to configure and upload audio files via Mass Storage.',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🔋',
				title: 'Power & Storage:',
				text: 'Contains CR2032 lithium battery, USB Tye-C Charging capability. Provides up to 1 year of standby operation on a single battery charge, 4GB of internal storage',
				youtubeUrl: '',
				youtubeText: ''
			}
		],
        
        items: [
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczN8YCFB_ZYKoFaYTigX3ERHvVJJ-004tR9T-T-CMPgQDJ0nBPNr6pnQDJ4CRZDY80kZk7x0WZ0DqEzGB4ZpREOjX5O0a-RfUprfh-Cqb7Fozy98xA31R1-226m8Q1thMo0p10C33yiinyyDLcJxFBAh=w1587-h1586-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPn9P8GgFLmmdqHidl2WSXwgVWf2EQtZkGRwpBQdcxobxwVsaYOjo9DlOgNlh49Do3VGsv_u-2VQZyMY_OXtEeaZXw4lXjQSS7nbtBDiV-qIcTBzYgdl3yhAIIw_oYQiW3IXrz7S2Yl9AVVPsKdHpcz=w2013-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczObjie9H-TV-cRSDnF8nS2NRytu-8JjApSNycw-bdSrmB1NUnFqAsKNWKJYCWAnRY5Uoe1LWOe8iJFvssUmZPe8DFEJAeiUw5muLttvxjUvEr1LyaCt7JZEdk66DlOd5ubssVyUQHdvHXUyEK7fZGoG=w2013-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOBe682K8XO2jwZWfbrHM0HBmaq5dbQgIg4oFyxpglQ5Ihxc6RjdffvaQeqytxj6QI5kHbdYUZzR-ApedHZ0Spu2wmJtODDPWzKDtd8cU9xrJr0oTfEd5QGiOQY357SoyaVTz-Ye_mbUbV1wpYZ4fQ7=w1100-h1100-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMw5wQW6WghdTACYiriu26fiPdFH01y6_HYcfNHNCP0i7vCGHHvuOwEtFw4V5hS5UM1GES2in8YJYJKTlflUdqS0uGTWPPt333JQXW0XpWGjuL5n9fXh8Jsk98UvoRUVFoDRpUxH8AvuGOgQmXQarQr=w1100-h1100-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPlaCEsQ7n3huNsEbMU8q8i0TcmqQp8l5GESc-eH2kGEU-LoJYQoeYUtlrwBB29wJy_IeMja6Z4seIWNaE4djSdpKgSSlmwisUOcstNWIvdet7WhE7l--7RYeFdWPNi_oJu-zTYNAjsIX9ocljohJco=w3629-h2013-s-no' },

            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOQGZCUMoQEuaC0l87h9n9XEGU71fk3qPLZDCrEdVFCN6NxNVVCT59A6G3j36O0bUsb2ymg-IeuI9-Rc0n3BtyZkIzwZZN7thEwwCZ7q7cOIsKsF66sCA67_ygAz7OZ1djFjwKDnp0m9qjqQVdBrQxK=w3629-h2013-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNXO798Je40CaglOvRmcLtQKCquKJTrCKFbcjQ2WCVpGlDv6EusZ4HBvT5dfc4RylEvT9h6qYflUSzr9fCnzCIFSQtKoIjvFInyAjKK-p7_CuSB4JV2l9s6xJ1VBcUq72JKCyS3BU4u-xT5mkLR55iw=w3629-h2013-s-no' },

            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNBxN1gvOzEb4Ub79SxzOPCkUr9ObEsITwzLTgwzRGeTfXnror-XhWa566iR99dO_VYbo6Pntpf-zVNRC9zx-ZVn1v_XM22hj2nHzwyv6V9R_Rgpyk89iL4s00V6XTXDdC3w-9c_GFyQWfHrzNrCqRl=w3629-h2013-s-no' },
            //{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNXO798Je40CaglOvRmcLtQKCquKJTrCKFbcjQ2WCVpGlDv6EusZ4HBvT5dfc4RylEvT9h6qYflUSzr9fCnzCIFSQtKoIjvFInyAjKK-p7_CuSB4JV2l9s6xJ1VBcUq72JKCyS3BU4u-xT5mkLR55iw=w3629-h2013-s-no' },

            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },    
    { 
        id: 'voicebutton',
        menuTitle: 'Talking Table',
        inMenu: false,        
        //bgClass: 'bg-gray-100',
        //imageLeft: true,
        aspectClass: 'aspect-[3/4]',
        showSteps: false,
        currentStep: 'tape',
        
        steps: [
            { id: 'bottle', label: 'Bottle' },
            { id: 'tape', label: 'Tape' },
            { id: 'filament', label: 'Filament', short: 'Fil.' },
            { id: 'join', label: 'Joining', short: 'Join' },
            { id: 'spool', label: 'Spool' },
            { id: 'printing', label: 'Print' }
        ],
		title: 'Recording speaking button',
		p1: 'The NOTT audio-tactile information device is an innovative alternative to traditional Braille signs and pictograms. It features a tactile button that, when pressed, plays a pre-recorded message. A key advantage of the NOTT "talking" sign is that messages can be recorded directly, without the need for SD cards or flash drives—simply press the button on the back of the unit and speak your message.',
		p2: 'Where can this device be used? The NOTT talking sign is recommended for use in socially significant facilities, such as schools, pharmacies, libraries, theaters, nursing homes, hospitals, and rehabilitation centers.',

		hints: [
			{
				emoji: '📚',
				title: 'Audio Capabilities:',
				text: 'All audio formats(mp3, aac, ogg) include recording capability',
				youtubeUrl: '',
				youtubeText: ''
			},			
			{
				emoji: '🌐',
				title: 'Connectivity:',
				text: 'Equipped with USB-C device allows to upload audio files via Mass Storage',
				youtubeUrl: '',
				youtubeText: ''
			},
			{
				emoji: '🔋',
				title: 'Power & Storage:',
				text: 'Contains 500mAh LiPo battery, USB Tye-C Charging capability. Provides up to 1 year of standby operation on a single battery charge, 4GB of internal storage',
				youtubeUrl: '',
				youtubeText: ''
			}
		],
        
        items: [
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMALUGGYkweYg1-boJJsW6AriR_7ob1iDgmlyJhkDPdrZhvZWEVb4baDrqrLdoRlkweKsK-T2IWEwLneFeuDxLSQjBhKibMm6r_e6XtGWG5IMcKFyeaOdUM1GHv1EZDxLMMDG3ivIUWLa7M1jKgXzyd=w1100-h1100-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPtrqnuhPy6tDoktI8XA6FcSbOR8b9liTk1qCPSpdV4McIKt1zfB64kRlfnk_iCZcdEsxf2RMo1Y9McB5Tbyc_d3gvin6G0ySQLdxJBQJadQX8JbBhc8RueNlS89OXJah4ZNHklcHDN7qdG-cYjlit_=w1100-h1100-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM0iaaH8_P2MJfR-o4o5wEqub7Jb5VXtVGI6pu48dS40oLuJyszEkJ_2lIkPLdbQx3f4jWRFAF_UncGnTu4WPAJVO4PJdvbVQDWq-qA2Bo-xwai9hCseKVJX90oNj3b6WMC9oaqGFZl0tXMEwbKkpnG=w1100-h1100-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNngwQaOCy5wYCQldbj7UET3ZY0MSL-Fk6bQPHUEYG8JNifgF3JvUoBov6tOmt54xaoHrpAGJmLYmhJEgykkwbTdDtAHMQGgvjwcLhBGwAlQTNURwD29uIlR6lhf_E6RNMGGBBKptEJ_nkap7-SBSf7=w1100-h1100-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczP-WihpgEVyZb6n1Rya0OOKSUTgg7Nh-khpOTDvU-MjL0GYFdGiZNL86qDsXrmSal15ujEFG3J_yvvE-A_osIpYpmHGTXgc3vr85AxArIDuLyBs0Oz64Q32RoZquz6ca1WjYOCNYS0WaYXWtaJpYHq3=w1100-h1100-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczN-FFtv_d7gzBLG4JeqyFKvPvA4Rbc7m_y9CucyClO7PkWDHNIE1Fg-1UUUJoWISALF2gqk5XARVtMazE85ckDaSRA5uQmzhSUmg-MwFxTY-zW8AamItO1OhO4F3NBQeyNvtQ0MoeNvqNSs2EPkHFLc=w1150-h1150-s-no' },

            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNYq_xVsfKtnmfPQ9DOw-QtT8PNbS7S0rl4lsBoXEdT1NXmmc4bHlUTgTY_wJ4NznTAEiLuOFGSrmTQc7VmftihDKejVfB1FM5lUlWB5nOhe43EPPqjsvNcMyBuZ6EObvmh9vMh-LVnAox3QSbVMbuE=w1097-h834-s-no' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPy7X1Po9xkaOby5Zb_YpKOGHSQ4AaGfnDYL5NtoYC2AfeKuqtBdtw1znhhDAc7Dvi3V44SwXWtK2XGd4KNLR7yMXJPQiYLWGjpxE_PVbqJyRdnvMY_1S287-wfUvhpJbYRLsYtYlhBheS1Re65huIR=w1367-h957-s-no' },

            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
];
