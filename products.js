// products.js

// Настройки слайдшоу
const SLIDESHOW_CONFIG = {
    showOnHome: true,          // Показывать ли слайдшоу на главной (true/false)
    albumsOrder: 'random', // 'sequential' (последовательно) или 'random' (рандомно)
    imagesOrder: 'random', // 'sequential' (последовательно) или 'random' (рандомно)
    slideInterval: 5000        // Скорость смены картинок в миллисекундах (например, 4000 = 4 секунды)
};

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
            'https://lh3.googleusercontent.com/pw/AP1GczM5q7Vb73DAjlDXVzkPN2U3sOrcCl0uZkOvfRzoUR7M8cbzS7HOeCCf2Ojlj18D_88iaoOY2lR6Gg0bsj5Xim97SvtYf-asbjS0gBTQ35c0uUp5btOvZMvOaO2md_SoyfRZshu7aonrXKlHxz_ydUk=w1128-h933-s-no?authuser=2',
            'https://lh3.googleusercontent.com/pw/AP1GczNMXK2kaysBcx1_FR3ttZue1hYOWsS6MtWPAVgHzOYnS7UaVKUtdEpj4_QLoahqRs0kBZNhp0gVg4ITV8IBnowYdDkV4_o4nYF9CbgpudsYqsBsBGze0G4wzvjUSnxzauztw-P9kxPKWxfwTdhE_u0=w700-h933-s-no?authuser=0', 
            'https://lh3.googleusercontent.com/pw/AP1GczNIQNQ3M4iaYGgDpb-AUzzTf_7ORwB8hdhsG59lhKyD32xQjOnLBFRlKU0gH1dd5dIuQTCaiJRFozb7Xds1dPBVtTFHQiyMQi0IXloz--BgBveLkqgv6tYZgZyX4SfyzU3UFcZgWlu3vHkUmf-VOmw=w1244-h933-s-no?authuser=2'
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
            'https://lh3.googleusercontent.com/pw/AP1GczPgBo_7C2KwYIJ29EcqmHAEeoHDVBybO91Sahj1ToHJkACOVb3g30ML3A9b0hHjlYlEcQGDfqFwYMcxBBIyB-EXlrKRQsKIbTNDVMUB-Q0PIoiSc7orZfNCbUUYc66n28OBII436Wof0A8sfKhzE5M=w1244-h933-s-no?authuser=2', 
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
            'https://lh3.googleusercontent.com/pw/AP1GczNpiE8GOVi1EofHW922b11Sx_RDeUKzZIKB4S5xm7rrTI4igTIR-6nURcwESxJy3m6nX12DpBChMbm06rgCFpOSQ_xbBBW3uhMpz2wTRFKDW07thieLXI3wQTLs3wcfS8XtcndM4QoWdBsyA4ALuHA=w1244-h933-s-no?authuser=2', 
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
			'https://lh3.googleusercontent.com/pw/AP1GczM6RVrSL-m62cgg07rzhc7LhSxP8EufTPtYIw3q6FU_eQXdPH84oXci1KFdWiNwqcUw-UcCk1Fzp8grzS8bZKO2Gmbpt2FOuSBYFxUx-m2BntybUIWdFk9Ktx9Ax3iIkcCYJNHYybQf-0EgpNH8G9o=w1440-h1080-s-no?authuser=0',
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
        id: 1,
        bgClass: 'bg-gray-100', // 'bg-white' или 'bg-gray-100'
        imageLeft: true,
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
            emoji: '🌍',
            title: 'Watch',
            text: 'new videos on my ',
            youtubeUrl: 'https://www.youtube.com/@ReInstruments',
            youtubeText: 'YouTube'
        },
        {
            emoji: '🌍',
            title: 'Feel free ',
            text: 'to visit my ',
            youtubeUrl: 'https://github.com/ivandevel/',
            youtubeText: 'GitHub'
        }
    ],
        
        items: [
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMnarTecFfHzuyWZSogkoioJ8vU28hqGTMfHOmcTWBPSN6K5oQT8sF6znd4u1s-v0ogSQ4leuZHmektU9PDosnIhKL1kkB608sFuqiHkcLhRIjgWuFpRcoG0dYZpKzsqRGz6oizE_Bg359WwFgXkKpL=w1672-h941-s-no?authuser=1' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM8-sEEDgwskzz0WmAKjwdsSQioTMhEatMr1FN6zmXjef2Swb-oDQipVq9ZElQcV8tdcQIczW9b2JbKk-voJypJsgf2liuuuHwJ1Dx4ZhoqeaxeDG37yGqVy6HgSIzohcH6ZjpQJo-eHUMatAUtb3Rv=w1254-h1254-s-no?authuser=1' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNBCD8DUxFQ5fxJ8R_g9ibfl747ciCVS9mu5spgyPHdGmDLlChmQIISs-A1-bynvZi2UbepPZZ6A4dm-bY_9JM3ZuAnWqIgXVikZVIYSd0vXJmfXaebB1-dffm5BKstlsDZE9EjzWqT91OKwWhMVbO8=w1672-h941-s-no?authuser=1' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNe_4MkkcFdYtTsz-bmp9h5Us4Dc1YZEbShd8tlAgs6ZvWqBLZo2yImj0Tt6YX_3Fs4Y2z7YKOoNhOmu17og7QhmoHCjjKg3mIpyFSzY8s9nEMZB7yOeamsx3my26I18WDx_TKTSUsX70VA_jyv6xm1=w1448-h1086-s-no?authuser=1' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMa8CesIEpP62fioyUSlx2HusbOT0SIyNVyifm-RT_eAHqnQCYb2Xx-vQ1JqqIo2rIjL6ile0PRagnv4LZrJ5R8rJGBnNF_em6l0RmlzqX2eqd3Y8euBciokb1nGV8Lgvz_Wc0zBtzzUkity8WIZUQe=w1086-h1448-s-no?authuser=1' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMPMjVFjeTQhKKHsiTYoZulXy1wQqUNeM2alF7KLjmps5Ur6HLa9ovWYUtoDUR8FaCfTDKoGI6ZD3CrcOup-mYKMW_y59bhfKHrVorgZ7hNZHyf5i607zN2Uy3gPIz3OW95Viq2-C5H-H7WhqTh55dE=w3579-h2013-s-no?authuser=1' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNsGgV7C0Q0a1bl8vRrgFSuMOaQYW-7XDA4h1V5TeDkjiiGb17EQWiv3vnVCngLnSs41_gf6LkCQ0dpmBlc9q-fMCtYxiQ264CaRiYZjuDQ5yKTTcjJ2-a8zVzgN5PXb9OsCtGVSpF0HaFOH9MF6wpj=w1086-h1448-s-no?authuser=1' },
            
            { type: 'pdf', url: 'https://drive.usercontent.google.com/download?export=download&confirm=t&id=1ekCvtUsUVLTkgrTOHB7Qy2cqHE2R5Dab', title: 'Download CV (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
    { 
        id: 2,
        bgClass: 'bg-white', // 'bg-white' или 'bg-gray-100'
        imageLeft: false,
        aspectClass: 'aspect-[4/4]',
        showSteps: true,
        currentStep: 'tape',
		title: 'RePet Filament Extruder',
		p1: 'The RePet Compact is an innovative, compact PET bottle filament extruder that gives you a near-limitless supply of plastic right at your workspace. The extruder is designed for quick and convenient processing of plastic PET bottles into filament suitable both for 3D printing and for use in grass trimmers.',
		p2: 'The extruder does not take up much space on the desk, consumes only 10 Watts of power, and saves you money on purchasing consumables.',

		hints: [
			{
				emoji: '💡',
				title: 'For more information:',
				text: 'Visit our',
				youtubeUrl: 'https://reinstruments.github.io',
				youtubeText: 'Product Page'
			},		
			{
				emoji: '💡',
				title: 'Superpower:',
				text: 'Turn recycled plastic bottles into unlimited 3D printer filament, saving money and time. Visit our channel on ',
				youtubeUrl: 'https://www.youtube.com/@ReInstruments',
				youtubeText: 'YouTube'
			},
			{
				emoji: '💡',
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
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM5q7Vb73DAjlDXVzkPN2U3sOrcCl0uZkOvfRzoUR7M8cbzS7HOeCCf2Ojlj18D_88iaoOY2lR6Gg0bsj5Xim97SvtYf-asbjS0gBTQ35c0uUp5btOvZMvOaO2md_SoyfRZshu7aonrXKlHxz_ydUk=w1201-h993-s-no?authuser=0' },			
            { type: 'video', url: 'https://www.youtube.com/embed/ymG4sdoDH3c' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMajsOOUNvj3ylUR2Rq6C250YDWKEZwF-yP_tIhVLd4jZwYn16VqOM5oK4klKnMRE0f8mrSf5D0C0mh3yLApbhti8NayVBFi_DV-XJz2HwLlecokk2qOavro_G8tJaX3LqFJ2wWM70W1xg2L8NSE4so=w1392-h1200-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPUdmve7NyzZid149LHk8yQQSmtVBqXth2lPZJPAPKQKf3oGLpZlt5IOlqHxM0ggdQo6A-WiiCgaM3TnFtZ_dNAsJNQX-SYa3gx7qCkS1akf_0wjxslwt9e6ldjXJ9DEFbEI8DdZduaYtURn5E7Y3He=w1920-h1080-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNnaQcdxYmvovBnOlUc7td7HkBe0B2K-Gkgp1mJY4NFz8ow0A0CFN9VGWZKahhbUrXwF7Kxij4NVYNp4TnpbQaz8LoyJTAk_NgTlzkoMh4VaSDDd5hIk-CmpuQAqWwbpvUhZq-QYnAM8NRLzg8TqNOD=w1433-h733-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPBgiV6GHKFfN9aHh9plAubV9hBIi9cgtsooJl_Yc4Ztce1znFFvEp4nY46-k5Pj678VkbQG6zTNwO0VVsaNL6IaZAiTZIinD9BchxUsM-D_y2o4G4d_wIlHvwLEvXTcnGOTh7Qwb6jNbjidavOpTpy=w1924-h1080-s-no?authuser=0' },
            { type: 'pdf', url: 'https://drive.usercontent.google.com/download?export=download&confirm=t&id=1YMHcb2ZrTu7014qup8AXLSSAJnhL44xX', title: 'Download Broshure (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
    { 
        id: 3,
        bgClass: 'bg-gray-100',
        imageLeft: true,
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
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNfEF6nfMostqM0HekyJH74E09a2Peigl6F6ft7UKr6tz0WA-H7Uh6QrMQv1xOe_b6rmXJywmOmNBLAa_CpNVzA99FgGQmCqHUQ7VMwf_3MiAzQfjBsvY5pO2MBnhgVpF33CQQNsRhHKD-aV3P5MV2e=w1200-h1200-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPcHu1P2ATLuRzlPGmb45Rq_-etJY-bvQIkWY0WygXdyuKzL5YqeHOfQyOpscnzQWGALiKe1Z4_PtNBSLPphW9raQEuZdlcmCg2LpoHrcEXWa0cJL-N65Cy_FXb0jo__72_jLWpuOTzPSD2iS-oYOin=w1200-h1200-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMrfprUEmCbKHvYsji51NbfPab4hZK6DCi_FAwggeVKRGaan3ydtcTriVa8MI3ZmC_8-PH9-hOqtHQForH2fXiMI4w5f8r0eoMhNh6J4pTG4sVRd6bzl0RkiCuZLLrB-2tCBXIOQLSrMvduhMVj2De_=w1200-h1200-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPUKA2GAp0_jWFQa17nQQ62pacUIdJg_btePWZ5IEiYnXoYkdrZmygK21Af69vLufBIYNG827sYfnHWlqofqgDbVZFDFXW1P17psdj3zCRVXdBQHEyhFcXBuGKaADJYk7mWrty1HV74Y6R0wGbXhy7R=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPVQTEo24_LI01Y7tG5HgQHHQtVVrD-SKbfjMq_PhlpW6SxJGZ3gJVcGaSQA3E9BQAoyAFs23jUVoRXG2XwwgL6UBuhHAd5e6i9QovM_sXutNEioq2WeFiqROJRIEUEq6e5lquirqZOarJBpZKvBHZi=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPXfZAzWpfBg8uC3JV9WB79XTgIEfMt155BAN1798HFH8OYxeDp_f6W5ehWJiaKZ1wY7Ud0CPh1rmbeWiyeiiEacM0K_PqgWGXhuWo24MokPVyWRMH3zR1F2--Ed8au0jDSpC3wjfO6WXtOIQbsk1Mw=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMRW-mAWP60weYUKMKUetAuZrDC9D-xq2EgAFQMtkc3KZPZDSDpK9VfBqdD4zwSJdBZugcokP6hptQViqoSLXIDByft9qF8E7dfIJhF97c7qc9ZBmQCsokJeghYRc8WIKWNLGwL5g8SKOs_im2TBJnW=w2897-h1749-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNFyGGvlM5BR8DKtKh_nrIV9QAQDoofiJe7UKhVB_Cm5YMVIUe_pmDegZVrxM4Kq-VmU4s5Bq9iTLd7-2tVYSkPzwoR2Y9a5VITeqxJyyMc3gAWx_njyLxJNauFmNualJV64rydWARCao9_rLadIPr_=w2693-h1649-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczO4mGEAEuIS1_7V1m5S7TaznDtYmxeftQPgpShP6tj900LUr7CkZgjsv0gh4865uHiqxlU3GGpoZaYlGWq3tah2ah0f7JGvWP8iYitWl44Hri3WzWhOJXch2v_y8MujY4_-Z8CSFqyJi0Lu0KJHjGQS=w2613-h1613-s-no?authuser=0' },
            { type: 'video', url: 'https://dostupsreda.ru/media/files/materials/%D0%92%D0%BE%D0%B9%D1%81%D0%B0-%D0%B3%D0%B0%D0%B4%D0%B6%D0%B5%D1%82-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D0%BD%D0%B8%D0%BA-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA%D1%80%D1%83%D1%81%D1%82_0zWbDIF.mp4' },
            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
    
    
    
    { 
        id: 4,
        bgClass: 'bg-white', // 'bg-white' или 'bg-gray-100'
        imageLeft: false,
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

            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPFTXWtu9jnvi0_vEZSOVqBO_MzwmcNnkHUWezLgKfNl7elPH01JeBi6DPxd7ZCEWHrTkiHj7oC_jVcaBS-Ix-ia5jtMRWE9hqVCSoVt_I6gqdxvPrXuh20DvKE5LoAa4wKdCuKsIUyATdd2egTCaRB=w1300-h800-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPuxYnFp9ahPRlHcogBUUSr2cgDghWUWj8uRi2btBM4ofCh-CiJCYy9x0sxAbB-Ez174A3-jbCBtmPf2PKXegXmGN7Qo7AOJxswIYQMui3fGlR3jUThwPD91Ar3s7rBYoMqWJRKdvpsSvUsII8y-WSP=w1300-h800-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOnrbBQMt9j8lIfSKnfOzxbTuSjgbSIxOqXTKyz0Lvd3kkOggu65fyg22sczvDbwpwpkc8D0IYm6XrpLVwz4Ujo-__cXQK-jtdHkC8mpTJeaMV8sNNsDUeSc0uFk-TaQv0qF9TYXzHnc1m6-kDbGiIs=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM-cPDWWbnAVelaxrsvzpfjJzkxh-Zcrl3YQidkWE2RTAsDARgwwSeSe73JyUP72gE8HQ9Dx6hRGkM3ynOKpeat5dwqUoBn46TVBiFs0_Tp44cqmqQSYHI4eiw_WrDjw4UknF1nD86oHLnVpKc3euny=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPPGCPTpEEkqP0vrb0Ph3FnXhhrWzKu53JN6-d8gJFTxYuBlgzYtjfVRNMZUd57uMYRk8P93Z1sklAG3__hu3sZM7SSYhmMTTe2O5RVkK_UC8yOoTW0P0vLNEyyH2dCA_0jyf_ZAW3Qf8NPtgy6uF4t=w3629-h2013-s-no?authuser=0' },
            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNJ584hq2-gWcMgJL4HA4Q-FA4S09BkzkBUsrauXE5h50O1GaAqMtDXQOzy34EuInmVEJpQopb5sZoQA4ClKzvzbadh9Waput_-IyEAXyznOoNIsqyklborEmkcWjnlzUGQlIKBDCs_5bLfyaC-RjZD=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczONiD-a4ueD5_0ZpwhRi9VtPZkA5LqjCW9KzksfTZDJkJySCpUbORy4S4kvOXblYWcZAZpKmnBTlOgbf2ATmgG3adA9dqngj3Uh7WCCVTLkZYVO6Bhl8lIyEX2U0HE6gwdm6N-zaGvccqUVCRjZnTSS=w3629-h2013-s-no?authuser=0' },            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOuPRldyENJYqLKQ5CuZc4FuZ9RkuesJoNmS4W-nRp2WiKiyNsk0QaD-3gIUTq1uj9zIYSCH0ih0qk37ul3cYKabILHtyG4-SmZzgklNrFBeuxZLqZT-o2KNljwG7qtVIzNTQgqmXaAsGnVJiPmIsnv=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNNH_HznD1uOtS2Q9Rxs3pbBSF-PwQ2vLaS6hr2GSUAVVIRxOvSnm4FcysFYSx5wREzpjyy7KXKUYlFtYdQJM2zJ1__VYltpQ8MEgebTXgZGqgZqjo63bTaFrA1EmSV0AwcLbiqSOiKjcILpq_645af=w2029-h1141-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPqd1a9yfv_YrnWMqkOXrXkJgSbvjAZy9MwH3kXtxQzVxvw-7ddLwerTkMg05x69pTuR9VQJyJrxl0V-LRR6Kgl3gVQsUjZXx9IfVOd0xFb1npxqvM4Dyb99NtY-FgfuXpzBx3Kph7wznh-ujYORrfa=w1889-h1089-s-no?authuser=0' },


            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMY25IibjH8P6pHvJVgvRkG9V1jss1xjkZOLsKD8XqUVcdtBJdpgcqwjGYFNWDYV6i2Z-LLJ0bWPZkzc-tAWjCa8GFGd1afWS_39N6aXNLHz7NQXD2HUD66VR4Dd_Ttf6X8wbdnu587NhLZgGQ8ZxE-=w1561-h1541-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM9hqghCSxBnP9BDdUXFMYGF-m28ROHbRDimhBtpPc3Ujvfl_eONqz-iY23-knwVGWxE3sVvcvBjOXzW7Av2_u_cD4M3Ik1QXJbN4sT2lG7qrZsicSfNRE5Pgc4YQDyXY3X85cQY81dwQ31zCV0fn92=w1553-h1697-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMBuyGwCSu90MgejVbNpseJdY_lB2L4W0bXsjEdwFz8DmDRzVhmPQGZ4sYZHjQDfrP-bftn8v0aBxGfVWELaTRkeoCVznvIEMotmikvys_HMaXHv01cl7ZBk0SwLh-YLvVPJZsNs8iD81YYbh6LhhVz=w2661-h997-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczO4vOl7y7x9p3FV_ox7oIC9n4K2ATm1x2s6guyTU_kHfNWCOEeEY56Y2hldSNxdD3wy3VPqcA0_QkRObdAHBoE4BghrCaJY5HnANrxpyWmOj6aITDJor8VnTBl2N8MZ1duEc-plSEwSUGyGDIyeqxaG=w2645-h1053-s-no?authuser=0' },



                        
            //{ type: 'video', url: 'https://dostupsreda.ru/media/files/materials/%D0%AD%D0%A0%D0%92%D0%A3_%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB-1.mp4' },
            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },    
    
    
    




    { 
        id: 5,
        bgClass: 'bg-gray-100', // 'bg-white' или 'bg-gray-100'
        imageLeft: true,
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

            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMkDe_3vGT3m-rTb7LgbESvtt-zg3BA5g3tKqfobk4CtTEx4hDLkRMqMkIQ8vaEmWcR3TwfSlsUj_sjRDdnwjV5EBsAHSeL9n7uyJ3aD3hADgdkYD9YnxxBMuMzG3-JoCAqBFHxWbKe4b8fVuERGgBo=w1279-h832-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczO_g4IoUN3Pfi4KJsdzQ6G-8Zgq6345659GhMEtIPGEYJMeLIQNF4kFUcDnTZyfqQATThgMwRXTQjqtbfBYrDq3dXcfaak3hCzpIFEvqYLBMDLUNpm2fSVwWTR0ySsXRB67lnHm5P5-Ry0JceMUYMs-=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNUcTny5LkZiAy5OSiv2UwScZQwcsKHLBINGZGLGdK8XREUMKG8TYnYkIaDeDaL_D2oUiaAqZIrxYtyMNoEwCJvY7yAyTfEWN-7uMppBXX8IopzqfQLBURgeTya296hSM-qNZeViu3atuFM_9i4BvEs=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczO9ae3pdj2qu7rsMtAqqQWCRwe3YveMliPSVmr_JQ8oLmo_5nCtymByt96EKhIa2-16_M1l7wYI-6_sUGxp_eJdj2UATqpfh2c013maSs2ju1zGL_cZ66KiHhpKT9PmXuCRcN5PmAADlPn8ogbNNfpL=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczODyAo57HFApBjtCkkCOWOOf1zsEkWrD20xU-tEEPfYOGrYUIkmvoeG1P6OvI9LKUkbB3lpVg5DxCCFebQU1nRoL8cChM0QJp7pUZkZzK7rVQKHJpMuWvAByuyK00ZRsgPiduu99JTxCgVSUmxV5D73=w3629-h2013-s-no?authuser=0' },
            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNnBzQO357QxZhfuizFtpQYkjDj-0wItlGNfhVxGp_s2ssVYXhCZoXaWu2r69CaAVjHmnLPXY6ck26LQGe_Di_1C72pw1BWLXSKfBpn_-SCkACDJGRVIEcz7PYkyky0-iyGTvkMfn6YuQg2y45EuFZz=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNL6ALsfIXp5Je8hBbbyzg-2XcH0evpgncQnW7F2KYTKG_uhug4tj9bRXMQlflQqxw6b2eYQ9lOsYU1qgjXQCXrdHh-XbrgRVEyT4RmVHVPAdetpU50qcfwBO2dryV-Srb6YAM5up_14pIUA5V42PG4=w921-h1753-s-no?authuser=0' },            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNbz6QmSS3XYA61vX6SKngrYls0WGthPexJyjF5dibSlmAFBtH4Zx49zkp8FQQIeyuBCmLtHB6KWSSBmRoF7XADIA-ivHjoKbjyXWmYnLl7w2lihZIBL4fBwyzy_vf7vEhlWIAqAZVH5wKOSALDIRsf=w961-h1745-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNBnRz5WRGG2TEahVx1XNo841go8b-zOUl7BS3YQCxUzw7mdQ5Ta3U7xK-JwnyJPabJ4YPCMQKGF9_rwcL6lJktWVWD8UGbBbDrmVmL3drPucfJWwEtC68zPneJsI7o-J71xuvnSBOnreGmTIzNricL=w1369-h1637-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM6djZwqilrlM7lVs6pvNgyrvt0Kd4Zx2KToWl4eX19MvgEfi-dfR8g8h7X_cGNE8w0lnv7WIchjUmhfoydl3b8nEVTj61grAzX_eNt65h5IURIcD8RT5cPjt9wxtDVIJfgFw4c4IWk8Jns2BQEsRoB=w829-h1713-s-no?authuser=0' },


            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPqqwrvOpLKqyMy1OpQXLTLiLK03cZD6KKYzgInPLVhheyJx_vmxdFl0rd4mfBKBxvFvWOoBJSzPD2Xk3ezijOFNCoiLEh-Os-DVBe8PErT6ZLp00DTW8V5P6a8bQulI1tOcFR4lLrJ1KPosgFPbJx8=w1221-h1465-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNtBivlq5LC-p_IeVcxRM--nW4Scifzf8_SJJ8GjElPyK4GPW7RGyer4QgtIeZ4-k3rUL1U4xSibvfaFa2zHgYjxR2Ebqo2n0i8ax8inTZ-TZTm9fhL8odvNu3obEqPlbCZxwIyN60d8HpJ8o973cYQ=w729-h1781-s-no?authuser=0' },


                        
            //{ type: 'video', url: 'https://dostupsreda.ru/media/files/materials/%D0%AD%D0%A0%D0%92%D0%A3_%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB-1.mp4' },
            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },    
    
    
    
    
    
    
    
    { 
        id: 6,
        bgClass: 'bg-white', // 'bg-white' или 'bg-gray-100'
        imageLeft: false,
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

            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMLM6V-0L2I2fxVQvlvXq_YfXxwIqqMIsOXJro-M_gtS1pkFQuz1VkWDRkPeEtw1QufI6_7H6qUObxGcGCgKZt3PHUK4uycnetc_KwWKeiP5RVm25fqkPKloPOTn6hfkU-8lWqBE7q8i4RxjuVgnhIo=w2013-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM7J8h3tBmHPyxQz5bhCj0T7RuNFLSwwXgBt4MkqrIr93gvrPKu00FWOTnPe8RiiQbVKCbYzpsbZO6wje8YNE5K3Ds0ZLl9LuaGtTPvAn7qLJ0fFvMJRX9OIZPRpVCUSTRAbkNfnID1yHTVv39t_HM2=w2013-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMdgAFpjC1fwo5UPuNJ8v-d_eSnvNBcKgdrhcFgKHqbXRIq400H9dtt4RU3QqciwjGoIqf-o6pnZUI_nXK4l11xKF0HnI6u9wLy2i58ez6lIkPM3TYP2MNeUf8fJj0Rltzt1QWoEhgZLYwuYfv14TD9=w2013-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM3Ty4PaXERePFooYHqyC3NyBKIphZzZM84gNp2GJfcja_cMLVXdi_HoiNZQ8h_ILzX8j4k3MsCobJFG0h4kedGJVJEP-dDEakVhmfGPJP89T-hWuRNyyP_5fyWXXFJ3VGuv1M0pVC4u5T5TW4L31ae=w2013-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMfmb1AeUI8cMYp1SEsYN5gYlvvxa90UngQmVDE1eji9lfp1zhocBRUO8kEp_kEyY2VWn7ivOafPY5C-LypXBe4SmKqV_ls8nO17zBx_E4VFN2WCFwZel1lGDFQ4hzPfJ9I6geCeDv326jZXYiSxO1d=w2013-h2013-s-no?authuser=0' },
            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPsHknkeoK5YGVQhP7x_PQMkxO9Cek1R4ajTiewDnd3ZOFwSj46FDqKaRtqDcK_gkJMB2jgJiiSC0q4m0JpfZxBiIBtwf6aKP5cg5lbqmxQDiO4DQ9InsNmRdzZLetWunlKhyO4qz4EWpRYFGMtR3Yu=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOL3ujnzoDIcePJ9NJP9F8_W5M0XcINzOZyVRoWVXgLoiRiEcU8k_WEEvhz05GmBPFaVKIRKrl7i_AczSzVAYz9FMM1uPnwPmLuAJhhF2192tfaIn2T9DxEb53ac8WgMucFBtrzU7MyT2pkkKK-nmYU=w3629-h2013-s-no?authuser=0' },            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNcnKJo2dEO6TYn1e-0tRW-DdqJtSG1_qY1Rya-qICmwhwOeblwnqJu2UFs85BBF7kXkguevCfi_X2zHsF8Y3Y8gB2aJa6pIRQGD06ZwghSiAy6u-Nz7BdKhRCgKz2stmATI5n_hoHl6EuOmceOguJs=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPvNJ8avrJq0x2HFj35KTSETSc4v_QVlnBHeiTLoxwGegwGSkR8HiV6TBbyWy7aY0-xW0P1O1GEQlSFHS3C3AI6D7lWfMK731mYM1o9-36yddwkwywzhZR4zcrbPc_U5kXB9ScGwpNMINzOrqQ0vhwZ=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMSB_0Be2R_jhpIHfaJbtBEipPnVkXGoDWZlFON6Te7ozH5_IRWI7TSETRejh-x0tIeami14z6ZfH91MZm9EPbWa-hkahIYdQbFY_rQQvHwF1EZUEMs4esweaDSBrvUlDC7uqABc8k1zUaUQL3iL9ji=w3629-h2013-s-no?authuser=0' },


            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPmxTsuY_GG8Shc1QbOhCSvkrwQNScHKRiRAjDyym2dAc6GLyRoHZ4tY-9yjVmfaCKUNqVMLhpr9Zt4Xd84DN4Mk1QYebsyHvvvoU55GBpqDYjxhQrWfbzYKax30I0-oP837hG3OJ22t3W1zbRvUfDp=w1383-h927-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPtkBA2CIk-mVJASxoGXZqQ7O7JHuBNR2zOPOpgw8qxvZH5QfuJs2p7N76vFEBZYgH2fm6xvsn5DAFfD3s2RLPAtG7I_jmgY6o7hevpUdOIW9IxguI3SmTBX-h-8TjhJRgchpiu5_lwJg1TqLkQ-BJ9=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMls9T78gGntgAA4_wiZHh4YMeyYh_3__DSSB2eYR-8Um7jtXqA9VqxGRuaWAq0kqJzUI3KHSPRO_URU1oLxjCEHbwUFUnesiunRaUlZx4gfnaMd3UpyPJSiS_Bm0SThty_ixZ4uGAhRqtPcp0TiDCw=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOyEv2yRjmoXcrKyc0zdVeRooBy9Z4uwn9KwOe2QxbYlmwrgiiro_OcqZIeGs2dkuuG2Yz3HnX0X0K7Pb9hSRZlJty5i3DmyrwYG63SJibYRVpeAqpgop5QIN5LYVgAvB0A7qMUbJwAnzFdNZMdLXDt=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNuzmhFPqshm3Z7WV1Nz1FQIn4UBVICiS7C2Z9huJH15niXQDWPbaY9x7dafGW7HybPEMhMYdpoSwMotYf4vgL_m3Z2faHiUcmfEvM-Ad_a0wY49mSEektfC9M8IiXNG_gZMhoE9h_qyUMLUWeKOsv3=w3629-h2013-s-no?authuser=0' },         
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNQzbLNjqWbrZJtck69gkVI5038jXsJ2psGOEUFsKvpuYCow4HRXfOS-I8Ud1VYvl4H4-9BznSQx42hNArfHaJDX7Y4CKcOWAvAZiuenEqsaEhKlzi8_KK1Ex5nR4VevhJyAdAFIMIRJZqk2Vbb9YwN=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczP_qeUD1O1Uoh_kzH7_1kOCjhtx_20pfPWDFj58Af3-7Gfzhb7XAvq7mJ7e14UM68fkfLc7f3TAQLSR_p7UWmP_HwWMotkP_lcYDIrZbfmvcrAXmJd7rVw96zOV713UPLv8ECbole7QlikUEzJYOphq=w3629-h2013-s-no?authuser=0' },            
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOkIJerVb2rTZa1-SMClJVCjnPFQ6P81XH9Iv4DPvpnKD11ulsgTfhArO5U-zXY98o93hl4E56DtbGq732yNjpm7eTntfk235FsaxPXpQfOTRc2Ql0SY3JsUagEHWJ29CwZVyjU6_NqugqgmRdLYNwo=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczONZgchlgAFtfec2fBJkIPdTCUeBqyBV7LrySD4JC6ik_M5s0SCczwdgfoRaQn0DqkZZecWuMrUFf7JoXHLOHqKVIdx3d4KMea0gQVKKRsc2F6h6kWhXgXV756cCK6R9w_ziqErwWGH6GSWxKGAJHzZ=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMUmQDnvCS39TMF-2B7h8SN4rvsKOblSrhTz9ymUgLsZNVdhil1fLMY5YPILzPcp-hebvZg0M65dqNnpbHJd1MkLT6iMK_wls3Q-IaWkH-mKmxqBlzfx8wmoa1GW4U7pukEUvyAVhm3z5WdbwQOh5ts=w3629-h2013-s-no?authuser=0' },
			{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOSfYoPPDihVj2-UiM8cx6lfIslVqW3Iu0ESoA_7SbMlbBJfnjb_kdxCaoexVklajeHNNyUVI_XpEz--7uLJaAO11LJ4ySBL4izNERN2hqPDo4uRxjJJeeXTIsiaCiO_voABvX-2P_ja8HY_YaWpP74=w3629-h2013-s-no?authuser=0' },


                        
            { type: 'video', url: 'https://dostupsreda.ru/media/files/materials/%D0%AD%D0%A0%D0%92%D0%A3_%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB-1.mp4' },
            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
    { 
        id: 7,
        bgClass: 'bg-gray-100',
        imageLeft: true,
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
			{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMXBScKsORDQbmnYR2yrv1ducHtr89Q9HCzhtC0Ep2FXH_4c5ylgXtUBxjvTqCqaM00XkiO_mxfeR9niArKqRJpEuBEDOtSGNonlD93rYJ8t-1CxlW_c4oYhQHWIxvitAI4jmK2fCGyKZz8wuWkWrYk=w1000-h667-s-no?authuser=0' },
			{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOa3icSBjdj0f8hG4s2XLVGLnivU9585werT96BgoqmQqytYqdqfH75r7mO_kw1UfMqxGL0VtptiXPkktTia7rn7VyX_N_U5gyxuLilYblBvmovYt8tjdIf7F7TNtAGf607qp2xC0I10ALV4F0fE3Gm=w1000-h667-s-no?authuser=0' },
			{ type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOwIAkVelvap88G0YIfIWMPvCfc7o4O_0bvpahrK12uAGy7KhLWFfdbsoorlbjcoTbHt5M9e8pnTWHfF1hDKVha_IV4IyZwST9sisedjPPJYKju1VGG5oybFCn8JT77GWTAXZMLSXRhGUcp4qr6DhKU=w1000-h667-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPqaB3XsLINNOnzPBRwseT093MHZoNRawy-f9Ym0pvvJSR4f6rJvnGpo2TL25RKf9uvXzplCL_vozPtjpUuetS8JPFY5FDO6BjeBa6ClJ4yCdDxaABvlbbRblTYOLMDcH7_MBWa3IYVWrGbxfxyeOnn=w800-h800-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPGGePX5R2GBWlxxmlJeCKbD41rkif05RZP-Zb-SxtpeRgGPhptFJ8yiS7wCOzNBlEsIMj8-ppctHwg_gaCS-mrxx99biP7DTXJtH5XM_k9Seetvdgc3F59QIBPmEsWbcLsjYfnsMd3Nwwa8EI51Pxa=w750-h750-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNu5h_L3BuIL4vdMRIsaaJwvUuGnnW83HYfi9_dlhTc7Zsr6YIWL2q4TJnzIlbGrV1eKAcT48bo02qSiTjqTM-SXugUKWepY-j7Zp21QwjsPsmZj2_d2qjrM814t1L4vCnv63xzrOjSA7jBCEl8yS77=w2013-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOU-CMCaAshJtk1XJYx90-AMny5cd96RI8mlDbmJg8STNfjn1rZIPQ71ocH1ias8_TUnb4YT2Kfmo-nU3Nvxfw43ibP7qbMYGwn813k2Otf2_00n-CZinaoLjSQx9YhVNGQTKm_BHOFsReQ9QMsvRH3=w650-h650-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOFkQSzpfVPFOmaW5Hx-bofU-kO_lwzZpiaZLmAiFccFARXT2jG8-sJLDNg-Wwupm9_5raAWdWLIG0JWpVl2OMitIWmuie67EtxdSO3DEdKY82ondV7d7w8foMJ2h_Q52Ig3pUanso1-DFC9VPdpIzF=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOsPYX2Y2zHeuCoM4KXmHYSqZTjMD8AmV0t5XrqmATPtcc-J3QkcdEY4BUdfoeBbIxzQl0my0Cxzlkz7KIq6dxRWX5nX-2gDNPq5NbpBWt9LAbL5qiyZqHLPq_WY_cAo5jLrxVCx_S8U1GBSpNfj8e2=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPQXgDKzw8H7kHIfGzHyJNr6AxpDIYEC1nTTJ6f49m4Bkn9yQuNtKbDpQYYD1N93L26kkpuHbUb4XGXj7Px-EY9sUNSe6AiQYvFJ-YyaX6e19QmdIa1ojXE8qAYJ3sRuIHdihYIJO6NrwR0KzPaxTHV=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPynAPcU7qt2GN9R6wEuhkneUOL8_ppr_rRMMn1Aic7vHY8QQHGj7G-QGLBJIV3KBShzOjvt7OQQr60tFJpJlOF-5kF2fQNWUWvaeOwQ2z6vp_PLfIWF0cXbAHXiCpl5je2FDHVm4gg3Y0yZG7YdM-U=w3629-h2013-s-no?authuser=0' },
            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
    { 
        id: 8,
        bgClass: 'bg-white',
        imageLeft: false,
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
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPboquXHcSqWSrx-EwH6w6cRw-uu0_Oa0rOx4DMekNjxR6aI-CylXuFTJbQvp-DZIDkVpMc5E5f2c4RLp14yTxNS0BzJGKulVDVRpofEQH89W71JAFMXoNOyVkzHGSjdlf31jA9nakjdS1-PE0uO6rF=w1254-h1254-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMSVTD715EM12qaKCkSUwsdyDl7mdC_7J3GGgVhDqXnXZ7Kguiwwh9tsOey7PpqGG4lk5w4t4cAM9weKdUKluAtDGUg9Rpd4p_kNAYLrJE6bh61EwQUIW3ZrBkyKZNFY7uOqxf6vmGvOZP7steLk73I=w510-h510-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPL_aYYTSP9hiK0l2hn4aHD0MJCgDM6ZFrLfjqUiO8Z67k0uIW1I-xzocxz-_0oZfw7n1BkLZO3rDtJZAV7UGe1Oh0MHLNbXOncN-U8OJq-PbLdJxhz4vslIvnx4HwgrYu-qLowpI-xOjuuYU1OnkTJ=w496-h600-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPwDY7S6twVewB4CMMJ-XOTKDimnxm9l7Oe0J0teVvLTniZMIMW8Ntn2gfkkS1LmOBY1U3rufYojOWJ9cTNprp6GEIjdXhFAEV-mJ-9By-tRSJcsSntfBlRhb8zexLSqJeyBtYA7yRkkjlemunCjQjk=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczN8L_NxYfHSAiXdKDc3jizA94uw6s_VY2xJQc-py0Nqs34nnYOZtP-oBUjNC3XEACbdtN6JsJDw5ODVOysMFlsNORRueWbTlF5OFhSdggDPzdKDjNV10t4Z9DZczHom_5GPRxMQMmP-bSDNxMv3n-QN=w3629-h2013-s-no?authuser=0' },

            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMOsXcvAvS2inIiASKzAOTjxoimJsF-3inY5GeTVe6poKoulESBaJhOUcROZG-oY_NMxnhFivxWpvhhRt8QmC2G8-rBxbBeOAFHYOS9P8nAXh82USkOlFj0iyqEbYibmSzO54DvAITNu6P7iJM58HC2=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOPGe16HWcHgYjKWTfpD4_J2vItRGJmaosqQxJbtgktaxSVUVNN2n3hT7Xh82_ns6bTDVM4hclmHOC2aoUDUYCkkcCe-V9Sf1K4LlE1DyiZ-jfroLSe2x6XfibVmZP9so4lKZwfj_UCDQv3Yi2lEcND=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPirch6OVe0ZOkczRjNIaBgedB3Me9zNp_6hdteeTaOgZwqWoSNfoudJJ_eG3i4UBikRjrKuc51GDwqw_Jr7soEDRBFGfoSRohcDesE3yx6Kzi0PPaClQ6JEoL2Vnt4xRQBmSx3H0q_11YV9XTsTeSV=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOOXzcuV_hjts1MY3eSDm7Hov9uoq96dub-kCZ6rktl_ffrrTKR4G7YIh-Kc3z_Kx2cT941sJgktEh9vX980TfRIw3VT-DQlQ4e1gz1Ay95CA5Dd1BMb6rsXpo9Exku3P-G5guVaM4BavTDvOHCBBdL=w1059-h1124-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMPvdXKgAcVSOxef55Mtq8DggMu4caMNe6AcRESLJQCS76KmIfLJ5UIRVJGGzD_EVjC5oktACsjfJzsNGwaycvRTf-JK_ChyWbcPuA3Zao0DZ5hz4BgjAiUtkO3KHMIsyTMl8A3YGjgag4pkbXtlOuJ=w1624-h1231-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczP1RBAxSwlRGjk8Jb4NA__jS5LwcTznSBlqosqjqWzBDcS5D753jEWLz4mLhRsnmr10JSnzFr7GGbL1N8NLGyfTRSwxrJsNrQj1Ou1oulTJnXUYc2iStABNgHHSs0VEHQPmDQxWwNjVjPKoCNKZBYDK=w1629-h1801-s-no?authuser=0' },
            { type: 'video', url: 'https://www.youtube.com/embed/4ymA_2buJZ0' },
            { type: 'video', url: 'https://www.youtube.com/embed/VbBEVBd04SU' },
            { type: 'video', url: 'https://www.youtube.com/embed/9ck88ZL7JQA' },  
            { type: 'video', url: 'https://www.youtube.com/embed/vH6aYH5--d4' },              
            //{ type: 'pdf', url: 'https://drive.google.com/file/d/1WIUw-T5Bs6EJUH6hmj3C1r9S4iSmuF_4/view?usp=sharing', title: 'Download Article (PDF)' },
            { type: 'pdf', url: 'https://drive.usercontent.google.com/download?export=download&confirm=t&id=1WIUw-T5Bs6EJUH6hmj3C1r9S4iSmuF_4', title: 'Download Article (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
    { 
        id: 9,
        bgClass: 'bg-gray-100',
        imageLeft: true,
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
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczN2mNaCPqcNJrmN011wPlfR6G25FIIcUsxDi5iZENsRxD8F7ia-jdoQ7zveHSFpD3icjZZWkuhefz1-zEhXh9vllDjTxewo-tiPCxwL46BXipumATqVECXjWNgAntRORFSOiSmMNRLcZQQScKA724a6=w1864-h1028-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczOzyzV73ZFicvh0B9KPHqSfe9tF-P_ni8HN4SN-zDI1jbLH8857dlXLJKGrmFsFrp4r-QWbSYxCIjkJCgU1AZv4PQHHkIedFo9NRQpFxtytp2uShDu_5q5hXI82dddMsmAxbiaVvL_7eiJckyJh442I=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMrD49-YmvYgj2RI8YR3vo1HYap8H6iP4VLSFq2Y7rLuMtrCa_2VK2piWSuPN8mHyzseQZJxqC4suOk_4BkaFIQeFR_gaDvB3wp0sp_ozqJUs_H8MJqPX4hibMpuWCbRGzR0OTBFTyD0yXPKbXmt3IB=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNgb6ks3gu8z98afUAyEMn3shi9A2BK_xT_eaes6bB2l0UJwTGASOnQ3phPhzXATDXbl0Pcscratejq_-VxZzjCPgZhh1-EfLiO2hYVlR6Jz68X9fwV3t6j3JYaWgQu8YRXEK2XAo8JnGtIF2G12WKO=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNw6ZT4XtpbajotEmHOJLfAQuxoD1BuMlygAKeC71jT_NgAf-G5PUBAMjHSeJkVWAWThGQ4dbi74RTOdISnuStx0Zmm7u6ysjXHiILCmYNRJLMLSXwG1TRg2McOfeRP3cStYjlcQzjmvM_JFEmjdhlO=w3629-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNuPGv5aii6Mcg1foKV9_KEVwR3JL0-RkemCa9GHu-iLO0WUfIpVUXBrzrjdKKy1Y8yW4YYaMhqvX280AUYZHa-dHZRPfOiwODM7pAu96n428OwFJPrDHgqKpEoK5Rcn-Jizstuw9Su_qXk9m1018qw=w3629-h2013-s-no?authuser=0' },

            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
    { 
        id: 10,
        bgClass: 'bg-white',
        imageLeft: false,
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
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMcmiV4drED0Sfgu623aNRmUL3jFvh-LM4orR2xOVbn8_R-PbK2kgaNJhsnvhR3trGn3qlQhAo9YJZ1WZrBCYwEb9GEf8cirv6LiB68rNNofzDOmB6sa72uoV8b9S4CchC6ACN-uILmTNpkXqwh6fse=w2013-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNMAy-aapX9E47-7QtN88pGoyl6nF-rKk5cOmXayWFeezFv6oukITgr2U9hckuChVYAouKxtywsJPAJM7yMWD_dTNkj4CKCco9L3GTQWvDMkfO-J-fscKRDgmyUx07ToJPaodldV1fXr4o_fvc1uQUU=w2013-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNScIUQELIC7cDgB0iwHOO8bfWAHUd0L_tdCb9RaCqcPJ_x-Xo9lquLyedkmPcDfguOTKVRnD-Yk_pxQt3syP1cIaEi7WF23NVLkRBL7VKppebu3fEX02dwpZ3vjbqQ5MJKdxGWuDz9-YL3XuoQOH6i=w2015-h2013-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMWOgMEJrm88UOB_pRjq0DzhwLAoKlkpJxBleQukA0ZCl4VigPBcpNxkh7oQp8H1vIUruqDtWZ2hos23FCqKG78Arr7vNxkv0eTNMWVCQtQVPEvxF-l5j9A7Srg_0dSA_AymuZaCS-MlMgKf8WIm7Dw=w2013-h2013-s-no?authuser=0' },

            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPbDpWdQSIMjognIYlLaDdCcjWrnFEfuC2MBO3Ijo3l-ZRMaD76CbEPAOvrXxd8mXHTv0WguL4DDJALQtCbk43ZFqEgxhOOu9MmReKXa3PzoyAvjwbdz4KwGBSh7KZ869oti3CoPsKsP1zSCTHVou8r=w768-h614-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPXgz6CvlxwFUcoJahX_yKaFWyhYaiqzLKSlMtRhxkewtEF0kNqYJZ09DDt6ZrUXbz5mtqtnAcRSEippAH0ReFKG77sqA5ULhFn-9Uu2205Og2jpylI8dspJW0QbPqjfb_l3n1uUI0GMG9jtYq1nOGF=w450-h460-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNKl8Nzjrn7P4NmGvETcswGfKliU-PZp8ITSFro3MqubEdj69vtMWd8kXhLrrcCW48kY1Gw3QuohAZwGHOMHAOnGm1Ykyg2kvT8sVAjaa5uGqTL6PonRBDg6Mgep7O6A4k_gnZtUnOMRIBVbWWJ_Oxc=w768-h614-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMBHi-kmhgLcP4CKLQXED3W4U1B52IdeFBB7JJkt4RtuVhkCOVlTQHU7NNHk4XLPKstAa3MDj4DeLmWXsVnl7GJHEXO1wiYh2SiOhfvkNnsMm_Ekd46epqPNhUoHRFnKiehuuuQda8XXMQozPaSukoS=w1000-h707-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNzypdemW7LlGIwTyvm1b35lzG0Z__JI6zRiXmzc67kkzhI-KxqNMdG4XmYgP3_Ed5jjStagRmZFc_E1JEHRcWtebg7d-xaZcjqqQYYwE_-dtLA9phE_iuLZYZS4Z1CqDHjRHFh17zYinMxkF3FF8qr=w538-h415-s-no?authuser=0' },

                        
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczO-eIAeit1kpNkjyCZXtvUMJGAbGu4lig2NllGd35Hy__DUu5eFtmtza__N3XarzF9YvBmf8-73VowehWPiSjBRdFvA3gswWlhwkJ_5y91BQPPtEhBu4P_kjGCqmckAPp7I_czrmwJtLPM0y1cHoZwE=w1965-h833-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNtArYjvetDyzvpZyHfKQDNkrAdqLf1qGYrnXpszBkwsCU80KMDpa_PFUMcCc68QlmaN59U24sV-L4RZg2fLn4mk7IpfD6adJLfzSE9Q_6o0ga-rIw6Hz-j9VcT3QHiZnsIOIZsSv-ZCIGVtYxAWqpe=w1854-h493-s-no?authuser=0' },

            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
    { 
        id: 11,
        bgClass: 'bg-gray-100',
        imageLeft: true,
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
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMALUGGYkweYg1-boJJsW6AriR_7ob1iDgmlyJhkDPdrZhvZWEVb4baDrqrLdoRlkweKsK-T2IWEwLneFeuDxLSQjBhKibMm6r_e6XtGWG5IMcKFyeaOdUM1GHv1EZDxLMMDG3ivIUWLa7M1jKgXzyd=w1100-h1100-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPtrqnuhPy6tDoktI8XA6FcSbOR8b9liTk1qCPSpdV4McIKt1zfB64kRlfnk_iCZcdEsxf2RMo1Y9McB5Tbyc_d3gvin6G0ySQLdxJBQJadQX8JbBhc8RueNlS89OXJah4ZNHklcHDN7qdG-cYjlit_=w1100-h1100-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM0iaaH8_P2MJfR-o4o5wEqub7Jb5VXtVGI6pu48dS40oLuJyszEkJ_2lIkPLdbQx3f4jWRFAF_UncGnTu4WPAJVO4PJdvbVQDWq-qA2Bo-xwai9hCseKVJX90oNj3b6WMC9oaqGFZl0tXMEwbKkpnG=w1100-h1100-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNngwQaOCy5wYCQldbj7UET3ZY0MSL-Fk6bQPHUEYG8JNifgF3JvUoBov6tOmt54xaoHrpAGJmLYmhJEgykkwbTdDtAHMQGgvjwcLhBGwAlQTNURwD29uIlR6lhf_E6RNMGGBBKptEJ_nkap7-SBSf7=w1100-h1100-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczP-WihpgEVyZb6n1Rya0OOKSUTgg7Nh-khpOTDvU-MjL0GYFdGiZNL86qDsXrmSal15ujEFG3J_yvvE-A_osIpYpmHGTXgc3vr85AxArIDuLyBs0Oz64Q32RoZquz6ca1WjYOCNYS0WaYXWtaJpYHq3=w1100-h1100-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczN-FFtv_d7gzBLG4JeqyFKvPvA4Rbc7m_y9CucyClO7PkWDHNIE1Fg-1UUUJoWISALF2gqk5XARVtMazE85ckDaSRA5uQmzhSUmg-MwFxTY-zW8AamItO1OhO4F3NBQeyNvtQ0MoeNvqNSs2EPkHFLc=w1150-h1150-s-no?authuser=0' },

            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNYq_xVsfKtnmfPQ9DOw-QtT8PNbS7S0rl4lsBoXEdT1NXmmc4bHlUTgTY_wJ4NznTAEiLuOFGSrmTQc7VmftihDKejVfB1FM5lUlWB5nOhe43EPPqjsvNcMyBuZ6EObvmh9vMh-LVnAox3QSbVMbuE=w1097-h834-s-no?authuser=0' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczPy7X1Po9xkaOby5Zb_YpKOGHSQ4AaGfnDYL5NtoYC2AfeKuqtBdtw1znhhDAc7Dvi3V44SwXWtK2XGd4KNLR7yMXJPQiYLWGjpxE_PVbqJyRdnvMY_1S287-wfUvhpJbYRLsYtYlhBheS1Re65huIR=w1367-h957-s-no?authuser=0' },

            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
];
