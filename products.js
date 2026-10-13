// products.js

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
        title: 'About me',
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
            emoji: '💡',
            title: 'Hint:',
            text: 'Check out my professional background and projects on my ',
            youtubeUrl: 'https://www.youtube.com/@ReInstruments',
            youtubeText: 'YouTube'
        }
    ],
        
        items: [
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMnarTecFfHzuyWZSogkoioJ8vU28hqGTMfHOmcTWBPSN6K5oQT8sF6znd4u1s-v0ogSQ4leuZHmektU9PDosnIhKL1kkB608sFuqiHkcLhRIjgWuFpRcoG0dYZpKzsqRGz6oizE_Bg359WwFgXkKpL=w1672-h941-s-no?authuser=1' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczM8-sEEDgwskzz0WmAKjwdsSQioTMhEatMr1FN6zmXjef2Swb-oDQipVq9ZElQcV8tdcQIczW9b2JbKk-voJypJsgf2liuuuHwJ1Dx4ZhoqeaxeDG37yGqVy6HgSIzohcH6ZjpQJo-eHUMatAUtb3Rv=w1254-h1254-s-no?authuser=1' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNBCD8DUxFQ5fxJ8R_g9ibfl747ciCVS9mu5spgyPHdGmDLlChmQIISs-A1-bynvZi2UbepPZZ6A4dm-bY_9JM3ZuAnWqIgXVikZVIYSd0vXJmfXaebB1-dffm5BKstlsDZE9EjzWqT91OKwWhMVbO8=w1672-h941-s-no?authuser=1' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNe_4MkkcFdYtTsz-bmp9h5Us4Dc1YZEbShd8tlAgs6ZvWqBLZo2yImj0Tt6YX_3Fs4Y2z7YKOoNhOmu17og7QhmoHCjjKg3mIpyFSzY8s9nEMZB7yOeamsx3my26I18WDx_TKTSUsX70VA_jyv6xm1=w1448-h1086-s-no?authuser=1' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMa8CesIEpP62fioyUSlx2HusbOT0SIyNVyifm-RT_eAHqnQCYb2Xx-vQ1JqqIo2rIjL6ile0PRagnv4LZrJ5R8rJGBnNF_em6l0RmlzqX2eqd3Y8euBciokb1nGV8Lgvz_Wc0zBtzzUkity8WIZUQe=w1086-h1448-s-no?authuser=1' },
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMPMjVFjeTQhKKHsiTYoZulXy1wQqUNeM2alF7KLjmps5Ur6HLa9ovWYUtoDUR8FaCfTDKoGI6ZD3CrcOup-mYKMW_y59bhfKHrVorgZ7hNZHyf5i607zN2Uy3gPIz3OW95Viq2-C5H-H7WhqTh55dE=w3579-h2013-s-no?authuser=1' },
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
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczMUza5zOwyDDewxsqSBPGtAF5k5gr5wcpySktigAYj5pzMhk86tubvlW_DIYmAiuTFnldQvFaVRakSDpTVEc5vi4T5da8U1Ax7rjxwUeSJQK8RUsVPNSaVZpk4j8EgFZtjqvNn1Gqo5vaCtowV2KrJ0=w2757-h1001-s-no?authuser=0' },
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
				text: 'Contains 5500mAh LiPo battery, USB Tye-C and Wireless Charging capability. Provides up to 24 hours of continuous operation on a single battery charge, 8GB of internal storage, and expandable support for SD/SDHC/SDXC memory cards up to 64GB.',
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
                        
            { type: 'video', url: 'https://dostupsreda.ru/media/files/materials/%D0%AD%D0%A0%D0%92%D0%A3_%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB-1.mp4' },
            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
    { 
        id: 5,
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
        id: 6,
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
            { type: 'image', url: 'https://lh3.googleusercontent.com/pw/AP1GczNooquinKNtMQYyFF_bW0oxa7pVnAkqy9al4vPSvKEbpbXR2eLY5N7X--M_xEoTeIj6qD5UZWUFC_Fn2U5lgqNCFNf8VY_vzUQsCBwXzdAhaPaPTs-Fx8qyxYkefGejeZL_T8aWgW2sZzjc1qeVo6p3=w640-h640-s-no?authuser=0' },
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
            //{ type: 'pdf', url: 'https://example.com/manual.pdf', title: 'Download User Manual (PDF)' },
            //{ type: 'zip', url: 'https://example.com/models.zip', title: 'Download 3D Models (ZIP)' }
        ]
    },
];
