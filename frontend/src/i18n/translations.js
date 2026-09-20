export const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
  { code: 'ml', label: 'Malayalam', native: 'മലയാളം' },
  { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' }
];

export const TRANSLATIONS = {
  en: {
    nav_home: 'Home',
    nav_scan: 'Scan Medicine',
    nav_search: 'Search Medicine',
    nav_recent: 'Recent Scans',

    hero_title: 'Understand your medicine. Stay informed. Stay safe.',
    hero_subtitle: 'Upload a medicine packaging image or search by name to receive clear, structured information about uses, precautions, expiry date, and safety guidance.',
    btn_scan: 'Scan Packaging',
    btn_search: 'Search Medicine',
    feat_scan: 'Packaging Scan',
    feat_scan_desc: 'Scan medicine packaging, strips, or bottles.',
    feat_ocr: 'Medicine Recognition',
    feat_ocr_desc: 'Recognize medicine name & strength from images.',
    feat_safety: 'Expiry & Safety Alerts',
    feat_safety_desc: 'Clear expiry date detection & safety alerts.',
    feat_lang: '6 Languages',
    feat_lang_desc: 'Supports English, Tamil, Hindi, Telugu, Malayalam, Kannada.',
    feat_voice: 'Voice Assistant',
    feat_voice_desc: 'Voice assistant for accessible audio readout.',

    scan_title: 'Upload Medicine Packaging',
    scan_subtitle: 'Upload a photo of your medicine packaging, strip, box, or bottle to extract information and verify expiry status.',
    scan_drop: 'Drag & drop medicine packaging image here',
    scan_or: 'or select an image file from your device',
    scan_supports: 'Supports JPG, PNG, WEBP',
    scan_sample_title: 'Or tap a sample image for instant demonstration:',
    btn_analyze: 'Analyze Image',
    btn_change_image: 'Change Image',
    selected_image: 'Selected Image',

    search_title: 'Search Medicine Registry',
    search_subtitle: 'Enter a medicine name to retrieve verified safety and usage information.',
    search_placeholder: 'Enter medicine name (e.g., Paracetamol, Cetirizine, Amoxicillin, Ibuprofen)...',
    popular_label: 'Common Searches:',

    recent_title: 'Recent Searches & Scans',
    recent_empty_title: 'No recent medicine scans found',
    recent_empty_desc: 'Search or scan a medicine packaging image to see your recent history here.',
    btn_clear_history: 'Clear History',
    btn_back: 'Back to Search / Scan',

    label_generic: 'Active Ingredient',
    label_category: 'Category',
    label_strength: 'Strength',
    label_prescription: 'Prescription Status',
    label_manufacturer: 'Manufacturer',
    label_brands: 'Brands',
    label_status: 'Status',
    uses: 'What It Is Used For',
    dosage: 'How It Generally Works',
    food: 'Food Instructions',
    timing: 'Timing Guidance',
    side_effects: 'Common Side Effects',
    precautions: 'Important Precautions',
    interactions: 'Drug Interactions',
    storage: 'Storage Information',
    expiry: 'Expiry Information',
    source: 'Information Reference Source',

    expiry_date_label: 'Expiry Date',
    status_valid: 'Valid',
    status_expiring_soon: 'Expiring Soon',
    status_expired: 'Expired',
    status_not_detected: 'Expiry date not detected',
    status_unable_to_verify: 'Unable to verify',
    expiry_not_detected_desc: 'Expiry date could not be detected from the provided image. Please verify the EXP/Expiry information printed on the medicine packaging.',
    expiry_expired_warning: 'Warning: This medicine appears to be expired. Do not use expired medication.',
    expiry_expiring_soon_warning: 'Caution: This medicine is expiring soon. Please check with a pharmacist before use.',
    expiry_valid_desc: 'Expiry date is valid. Inspect packaging for physical integrity before use.',

    btn_listen: 'Listen',
    btn_stop: 'Stop',
    voice_playing: 'Playing Audio...',
    voice_unavailable_msg: 'Voice playback for this language is not available on your current device/browser.',

    loading_analyzing: 'Analyzing medicine image...',
    loading_searching: 'Searching for medicine information...',
    loading_step_ocr: 'Reading text from image',
    loading_step_verify: 'Verifying medicine information',
    error_title: 'Notice',
    error_network: 'Unable to retrieve medicine information right now. Please check your connection and try again.',
    error_backend: 'Medicine information is temporarily unavailable. Please try again.',
    error_not_found: 'Medicine information could not be found. Check the spelling of the medicine name or upload a clearer image of the medicine package.',
    error_image_invalid: 'Please upload a valid image file (JPG, PNG, WEBP).',
    btn_retry: 'Retry Search',

    safety_notice_title: 'Important Safety Notice',
    safety_notice_body: 'Important: This information is for general educational purposes and does not replace professional medical advice. Personalized dosage, treatment duration, drug interactions, contraindications, pregnancy-related advice, and other individual medical decisions should be discussed with a qualified healthcare professional.',
    disclaimer_title: 'Educational Healthcare Disclaimer',
    disclaimer_body: 'MediScan AI is an educational healthcare assistant. It is not a doctor, pharmacy, or diagnostic tool. Never alter your dosage or treatment without consulting a qualified medical professional.',
    disclaimer_modal_rule1: 'MediScan AI does NOT prescribe medications or diagnose diseases.',
    disclaimer_modal_rule2: 'Always follow direct instructions from your doctor or pharmacist.',
    disclaimer_modal_rule3: 'Direct urgent medical symptoms to emergency services immediately.',
    btn_agree: 'I Understand & Agree'
  },

  ta: {
    nav_home: 'முகப்பு',
    nav_scan: 'மருந்தை ஸ்கேன் செய்',
    nav_search: 'மருந்து தேடுக',
    nav_recent: 'சமீபத்திய தேடல்கள்',

    hero_title: 'உங்கள் மருந்தை புரிந்து கொள்ளுங்கள். பாதுகாப்பாக இருங்கள்.',
    hero_subtitle: 'மருந்து பேக்கேஜிங் படத்தை பதிவேற்றவும் அல்லது பெயரால் தேடி பயன்பாடுகள், முன்னெச்சரிக்கைகள் மற்றும் காலாவதி குறித்த தெளிவான தகவல்களைப் பெறுங்கள்.',
    btn_scan: 'படத்தை ஸ்கேன் செய்',
    btn_search: 'மருந்து தேடுக',
    feat_scan: 'பேக்கேஜிங் ஸ்கேன்',
    feat_scan_desc: 'மருந்து அட்டை, பெட்டி அல்லது பாட்டில்களை ஸ்கேன் செய்யுங்கள்.',
    feat_ocr: 'மருந்து அடையாளம்',
    feat_ocr_desc: 'படங்களிலிருந்து மருந்து பெயர் மற்றும் அளவை அடையாளம் காணுங்கள்.',
    feat_safety: 'காலாவதி எச்சரிக்கைகள்',
    feat_safety_desc: 'தெளிவான காலாவதி தேதி மற்றும் பாதுகாப்பு எச்சரிக்கைகள்.',
    feat_lang: '6 மொழிகள்',
    feat_lang_desc: 'ஆங்கிலம், தமிழ், இந்தி, தெலுங்கு, மலையாளம், கன்னடம் ஆகியவற்றை ஆதரிக்கிறது.',
    feat_voice: 'குரல் உதவி',
    feat_voice_desc: 'ஒலி வாசிப்பிற்கான குரல் உதவி வசதி.',

    scan_title: 'மருந்து பேக்கேஜிங் பதிவேற்றவும்',
    scan_subtitle: 'மருந்து அட்டை, பெட்டி அல்லது பாட்டில் படத்தை பதிவேற்றி அதன் விவரங்களையும் காலாவதி நிலையையும் சரிபார்க்கவும்.',
    scan_drop: 'மருந்து படத்தை இங்கே இழுத்து இடவும்',
    scan_or: 'அல்லது சாதனத்திலிருந்து தேர்ந்தெடுக்கவும்',
    scan_supports: 'JPG, PNG, WEBP ஆதரிக்கப்படும்',
    scan_sample_title: 'அல்லது மாதிரி மருந்து படத்தை கிளிக் செய்யவும்:',
    btn_analyze: 'படத்தை பகுப்பாய்வு செய்',
    btn_change_image: 'படத்தை மாற்று',
    selected_image: 'தேர்ந்தெடுக்கப்பட்ட படம்',

    search_title: 'மருந்து தகவல் தேடல்',
    search_subtitle: 'சரிபார்க்கப்பட்ட மருந்து பயன்பாடுகள் மற்றும் பாதுகாப்பு விவரங்களைப் பெற மருந்தின் பெயரை உள்ளிடவும்.',
    search_placeholder: 'மருந்தின் பெயரை உள்ளிடவும் (எ.கா. பாராசிட்டமால், அமாக்சிசிலின்)...',
    popular_label: 'பிரபலமான தேடல்கள்:',

    recent_title: 'சமீபத்திய தேடல்கள் & ஸ்கேன்கள்',
    recent_empty_title: 'சமீபத்திய மருந்து ஸ்கேன்கள் எதுவும் இல்லை',
    recent_empty_desc: 'வரலாற்றைக் காண மருந்து படத்தை ஸ்கேன் செய்யவும் அல்லது தேடவும்.',
    btn_clear_history: 'வரலாற்றை அழி',
    btn_back: 'திரும்பிச் செல்',

    label_generic: 'மூலப்பொருள்',
    label_category: 'மருந்து வகை',
    label_strength: 'வீரியம் (Strength)',
    label_prescription: 'மருத்துவ சீட்டு நிலை',
    label_manufacturer: 'தயாரிப்பாளர்',
    label_brands: 'வணிகப் பெயர்கள் (Brands)',
    label_status: 'நிலை',
    uses: 'எதற்காகப் பயன்படுத்தப்படுகிறது',
    dosage: 'செயல்முறை மற்றும் அளவு',
    food: 'உணவு வழிமுறைகள்',
    timing: 'நேர வழிகட்டுதல்',
    side_effects: 'பொதுவான பக்க விளைவுகள்',
    precautions: 'முக்கிய முன்னெச்சரிக்கைகள்',
    interactions: 'மருந்து தொடர்புகள்',
    storage: 'சேமிப்பு முறைகள்',
    expiry: 'காலாவதி தகவல்',
    source: 'தகவல் ஆதாரம்',

    expiry_date_label: 'காலாவதி தேதி',
    status_valid: 'செல்லுபடியாகும் (Valid)',
    status_expiring_soon: 'விரைவில் காலாவதியாகிறது',
    status_expired: 'காலாவதியானது (Expired)',
    status_not_detected: 'காலாவதி தேதி கண்டறியப்படவில்லை',
    status_unable_to_verify: 'உறுதிப்படுத்த முடியவில்லை',
    expiry_not_detected_desc: 'வழங்கப்பட்ட படத்திலிருந்து காலாவதி தேதியைக் கண்டறிய முடியவில்லை. மருந்து பேக்கேஜிங்கில் அச்சிடப்பட்ட EXP தகவலைச் சரிபார்க்கவும்.',
    expiry_expired_warning: 'எச்சரிக்கை: இந்த மருந்து காலாவதியானதாகத் தெரிகிறது. காலாவதியான மருந்தைப் பயன்படுத்த வேண்டாம்.',
    expiry_expiring_soon_warning: 'எச்சரிக்கை: இந்த மருந்து விரைவில் காலாவதியாகிறது. பயன்படுத்துவதற்கு முன் மருந்தாளரிடம் சரிபார்க்கவும்.',
    expiry_valid_desc: 'காலாவதி தேதி செல்லுபடியாகும். பயன்படுத்துவதற்கு முன் பேக்கேஜிங் சேதமடையாமல் உள்ளதா என்பதை உறுதிப்படுத்தவும்.',

    btn_listen: 'கேட்க',
    btn_stop: 'நிறுத்து',
    voice_playing: 'ஒலி இயக்கப்படுகிறது...',
    voice_unavailable_msg: 'இந்த மொழிக்கான குரல் உதவி உங்கள் சாதனத்தில்/உலாவி ஆதரவில் இல்லை.',

    loading_analyzing: 'மருந்து படம் பகுப்பாய்வு செய்யப்படுகிறது...',
    loading_searching: 'மருந்து தகவல் தேடப்படுகிறது...',
    loading_step_ocr: 'படத்திலிருந்து உரையைப் படித்தல்',
    loading_step_verify: 'மருந்து விவரங்களைச் சரிபார்த்தல்',
    error_title: 'அறிவிப்பு',
    error_network: 'இப்போது மருந்து தகவலைப் பெற முடியவில்லை. உங்கள் இணைப்பைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.',
    error_backend: 'மருந்து தகவல் தற்காலிகமாக கிடைக்கவில்லை. மீண்டும் முயற்சிக்கவும்.',
    error_not_found: 'மருந்து தகவலைக் கண்டுபிடிக்க முடியவில்லை. மருந்தின் பெயரின் எழுத்துப்பிழையைச் சரிபார்க்கவும் அல்லது தெளிவான படத்தை பதிவேற்றவும்.',
    error_image_invalid: 'சரியான படக் கோப்பை பதிவேற்றவும் (JPG, PNG, WEBP).',
    btn_retry: 'மீண்டும் முயற்சி செய்',

    safety_notice_title: 'முக்கிய பாதுகாப்பு அறிவிப்பு',
    safety_notice_body: 'முக்கிய குறிப்பு: இந்தத் தகவல் பொதுவான கல்வி நோக்கங்களுக்கானது மட்டுமே மற்றும் தொழில்முறை மருத்துவ ஆலோசனையை ஈடு செய்யாது. தனிப்பட்ட மருந்து அளவு, சிகிச்சையின் காலம் மற்றும் மருத்துவ முடிவுகள் குறித்து தகுதியான மருத்துவரிடம் கலந்தாலோசிக்க வேண்டும்.',
    disclaimer_title: 'கல்வி மற்றும் பாதுகாப்பு அறிவிப்பு',
    disclaimer_body: 'MediScan AI என்பது ஒரு கல்வி சார்ந்த மருத்துவ உதவி அமைப்பாகும். இது ஒரு மருத்துவர் அல்லது மருந்தகம் அல்ல.',
    disclaimer_modal_rule1: 'MediScan AI மருந்துகளை பரிந்துரைப்பதோ நோய்களைக் கண்டறிவதோ இல்லை.',
    disclaimer_modal_rule2: 'எப்போதும் உங்கள் மருத்துவர் அல்லது மருந்தாளரின் வழிமுறைகளைப் பின்பற்றுங்கள்.',
    disclaimer_modal_rule3: 'அவசர மருத்துவ அறிகுறிகளுக்கு உடனடியாக அவசர மருத்துவ சேவையை அணுகவும்.',
    btn_agree: 'நான் புரிந்து கொண்டேன்'
  },

  hi: {
    nav_home: 'होम',
    nav_scan: 'दवा स्कैन करें',
    nav_search: 'दवा खोजें',
    nav_recent: 'हाल की खोजें',

    hero_title: 'अपनी दवा को समझें। सूचित रहें। सुरक्षित रहें।',
    hero_subtitle: 'दवा की पैकेजिंग का चित्र अपलोड करें या नाम से खोजें और उपयोग, सावधानियों और समाप्ति तिथि की स्पष्ट जानकारी प्राप्त करें।',
    btn_scan: 'पैकेजिंग स्कैन करें',
    btn_search: 'दवा खोजें',
    feat_scan: 'पैकेजिंग स्कैन',
    feat_scan_desc: 'दवा के पत्ते, डिब्बे या बोतल का चित्र स्कैन करें।',
    feat_ocr: 'दवा पहचान',
    feat_ocr_desc: 'चित्रों से दवा का नाम और मात्रा पहचानें।',
    feat_safety: 'सुरक्षा चेतावनी',
    feat_safety_desc: 'स्पष्ट समाप्ति तिथि और सुरक्षा अलर्ट।',
    feat_lang: '6 भाषाएं',
    feat_lang_desc: 'अंग्रेजी, हिंदी, तमिल, तेलुगु, मलयालम, कन्नड़ समर्थित।',
    feat_voice: 'आवाज सहायता',
    feat_voice_desc: 'सुलभ ऑडियो पाठ के लिए आवाज सहायक।',

    scan_title: 'दवा पैकेजिंग अपलोड करें',
    scan_subtitle: 'दवा के पत्ते, डिब्बे या बोतल का चित्र अपलोड करें और उसकी समाप्ति स्थिति की जाँच करें।',
    scan_drop: 'दवा का चित्र यहाँ खींचें और छोड़ें',
    scan_or: 'या अपने डिवाइस से चुनें',
    scan_supports: 'JPG, PNG, WEBP समर्थित',
    scan_sample_title: 'या त्वरित प्रदर्शन के लिए नमूना चित्र पर क्लिक करें:',
    btn_analyze: 'चित्र का विश्लेषण करें',
    btn_change_image: 'चित्र बदलें',
    selected_image: 'चयनित चित्र',

    search_title: 'दवा रजिस्टर खोजें',
    search_subtitle: 'सत्यापित सुरक्षा और उपयोग जानकारी प्राप्त करने के लिए दवा का नाम दर्ज करें।',
    search_placeholder: 'दवा का नाम दर्ज करें (जैसे Paracetamol, Cetirizine, Amoxicillin)...',
    popular_label: 'लोकप्रिय खोजें:',

    recent_title: 'हाल की खोजें और स्कैन',
    recent_empty_title: 'हाल ही में कोई स्कैन नहीं मिला',
    recent_empty_desc: 'इतिहास देखने के लिए दवा का चित्र स्कैन करें या खोजें।',
    btn_clear_history: 'इतिहास हटाएं',
    btn_back: 'वापस जाएं',

    label_generic: 'सक्रिय घटक',
    label_category: 'दवा की श्रेणी',
    label_strength: 'मात्रा (Strength)',
    label_prescription: 'प्रिस्क्रिप्शन स्थिति',
    label_manufacturer: 'निर्माता',
    label_brands: 'ब्रांड्स (Brands)',
    label_status: 'स्थिति',
    uses: 'किस काम आती है',
    dosage: 'यह कैसे काम करती है',
    food: 'भोजन संबंधी निर्देश',
    timing: 'समय मार्गदर्शन',
    side_effects: 'सामान्य दुष्प्रभाव',
    precautions: 'महत्वपूर्ण सावधानियां',
    interactions: 'दवा पारस्परिक क्रियाएं',
    storage: 'भंडारण निर्देश',
    expiry: 'समाप्ति तिथि जानकारी',
    source: 'जानकारी का स्रोत',

    expiry_date_label: 'समाप्ति तिथि',
    status_valid: 'वैध (Valid)',
    status_expiring_soon: 'जल्द समाप्त होने वाली है',
    status_expired: 'समाप्त हो चुकी है (Expired)',
    status_not_detected: 'समाप्ति तिथि नहीं मिली',
    status_unable_to_verify: 'सत्यापित करने में असमर्थ',
    expiry_not_detected_desc: 'दिए गए चित्र से समाप्ति तिथि का पता नहीं लगाया जा सका। कृपया दवा पैकेजिंग पर छपी EXP जानकारी की जाँच करें।',
    expiry_expired_warning: 'चेतावनी: यह दवा समाप्त हो चुकी लगती है। समाप्त हो चुकी दवा का उपयोग न करें।',
    expiry_expiring_soon_warning: 'सावधानी: यह दवा जल्द ही समाप्त होने वाली है। उपयोग से पहले फार्मासिस्ट से परामर्श लें।',
    expiry_valid_desc: 'समाप्ति तिथि वैध है। उपयोग से पहले पैकेजिंग की स्थिति की जाँच करें।',

    btn_listen: 'सुनें',
    btn_stop: 'रोकें',
    voice_playing: 'आवाज चलाई जा रही है...',
    voice_unavailable_msg: 'इस भाषा के लिए आवाज सहायता आपके डिवाइस/ब्राउज़र पर उपलब्ध नहीं है।',

    loading_analyzing: 'दवा की छवि का विश्लेषण किया जा रहा है...',
    loading_searching: 'दवा की जानकारी खोजी जा रही है...',
    loading_step_ocr: 'चित्र से पाठ पढ़ा जा रहा है',
    loading_step_verify: 'दवा विवरण सत्यापित किया जा रहा है',
    error_title: 'सूचना',
    error_network: 'अभी दवा की जानकारी प्राप्त करने में असमर्थ। कृपया अपने कनेक्शन की जाँच करें और पुनः प्रयास करें।',
    error_backend: 'दवा की जानकारी अस्थायी रूप से उपलब्ध नहीं है। कृपया पुनः प्रयास करें।',
    error_not_found: 'दवा की जानकारी नहीं मिल सकी। नाम की वर्तनी जांचें या स्पष्ट चित्र अपलोड करें।',
    error_image_invalid: 'कृपया एक वैध छवि फ़ाइल (JPG, PNG, WEBP) अपलोड करें।',
    btn_retry: 'पुनः प्रयास करें',

    safety_notice_title: 'महत्वपूर्ण सुरक्षा सूचना',
    safety_notice_body: 'महत्वपूर्ण: यह जानकारी केवल सामान्य शैक्षणिक उद्देश्यों के लिए है और पेशेवर चिकित्सा सलाह का विकल्प नहीं है। व्यक्तिगत खुराक और चिकित्सा निर्णयों पर डॉक्टर से चर्चा की जानी चाहिए।',
    disclaimer_title: 'शैक्षणिक एवं सुरक्षा अस्वीकरण',
    disclaimer_body: 'MediScan AI केवल शैक्षणिक उद्देश्यों के लिए है। यह डॉक्टर या फार्मेसी नहीं है।',
    disclaimer_modal_rule1: 'MediScan AI दवाइयां नहीं लिखता और न ही बीमारियों का निदान करता है।',
    disclaimer_modal_rule2: 'हमेशा अपने डॉक्टर या फार्मासिस्ट के निर्देशों का पालन करें।',
    disclaimer_modal_rule3: 'आपातकालीन लक्षणों के लिए तुरंत आपातकालीन चिकित्सा सेवाओं से संपर्क करें।',
    btn_agree: 'मैं समझ गया/समझ गई'
  },

  te: {
    nav_home: 'హోమ్',
    nav_scan: 'మందు స్కాన్ చేయండి',
    nav_search: 'మందు శోధించండి',
    nav_recent: 'ఇటీవలి శోధనలు',

    hero_title: 'మీ మందును అర్థం చేసుకోండి. సురక్షితంగా ఉండండి.',
    hero_subtitle: 'మందుల ప్యాకింగ్ చిత్రాన్ని అప్‌లోడ్ చేయండి లేదా పేరు ద్వారా శోధించండి మరియు ఉపయోగాలు, జాగ్రత్తలు, గడువు వివరాలను పొందండి.',
    btn_scan: 'ప్యాకింగ్ స్కాన్ చేయండి',
    btn_search: 'మందు శోధించండి',
    feat_scan: 'ప్యాకింగ్ స్కాన్',
    feat_scan_desc: 'మందుల ప్యాకెట్లు, బాక్సులు స్కాన్ చేయండి.',
    feat_ocr: 'మందు గుర్తింపు',
    feat_ocr_desc: 'చిత్రాల నుండి మందు పేరు మరియు మోతాదును గుర్తించండి.',
    feat_safety: 'రక్షణ హెచ్చరికలు',
    feat_safety_desc: 'స్పష్టమైన గడువు తేదీ మరియు రక్షణ హెచ్చరికలు.',
    feat_lang: '6 భాషలు',
    feat_lang_desc: 'ఇంగ్లీష్, తెలుగు, హిందీ, తమిళం, మలయాళం, కన్నడ మద్దతు.',
    feat_voice: 'వాయిస్ సహాయం',
    feat_voice_desc: 'ఆడియో చదవడం కోసం వాయిస్ సహాయకం.',

    scan_title: 'మందుల ప్యాక్ అప్‌లోడ్ చేయండి',
    scan_subtitle: 'మందుల ప్యాక్, బాక్స్ లేదా బాటిల్ చిత్రాన్ని అప్‌లోడ్ చేసి గడువు స్థితిని తనిఖీ చేయండి.',
    scan_drop: 'మందుల చిత్రాన్ని ఇక్కడ వేయండి',
    scan_or: 'లేదా పరికరం నుండి ఎంచుకోండి',
    scan_supports: 'JPG, PNG, WEBP మద్దతు ఇస్తుంది',
    scan_sample_title: 'లేదా నమూనా చిత్రాన్ని క్లిక్ చేయండి:',
    btn_analyze: 'చిత్రాన్ని విశ్లేషించండి',
    btn_change_image: 'చిత్రం మార్చండి',
    selected_image: 'ఎంచుకున్న చిత్రం',

    search_title: 'మందుల సమాచార శోధన',
    search_subtitle: 'సురక్షితమైన మందుల సమాచారం పొందడానికి మందు పేరు నమోదు చేయండి.',
    search_placeholder: 'మందు పేరు టైప్ చేయండి (ఉదా: Paracetamol, Cetirizine)...',
    popular_label: 'ప్రసిద్ధ శోధనలు:',

    recent_title: 'ఇటీవలి శోధనలు & స్కాన్లు',
    recent_empty_title: 'ఇటీవలి స్కాన్లు ఏవీ లేవు',
    recent_empty_desc: 'చరిత్రను చూడటానికి మందు చిత్రాన్ని స్కాన్ చేయండి లేదా శోధించండి.',
    btn_clear_history: 'చరిత్రను తుడిచివేయి',
    btn_back: 'వెనక్కి వెళ్ళు',

    label_generic: 'సక్రియ పదార్థం',
    label_category: 'మందు వర్గం',
    label_strength: 'మోతాదు (Strength)',
    label_prescription: 'ప్రిస్క్రిప్షన్ స్థితి',
    label_manufacturer: 'తయారీదారు',
    label_brands: 'బ్రాండ్లు (Brands)',
    label_status: 'స్థితి',
    uses: 'దేనికి ఉపయోగిస్తారు',
    dosage: 'ఇది ఎలా పనిచేస్తుంది',
    food: 'ఆహార సూచనలు',
    timing: 'సమయ మార్గదర్శకత్వం',
    side_effects: 'సాధారణ దుష్ప్రభావాలు',
    precautions: 'ముఖ్యమైన జాగ్రత్తలు',
    interactions: 'మందుల పరస్పర చర్యలు',
    storage: 'నిల్వ సూచనలు',
    expiry: 'గడువు సమాచారం',
    source: 'సమాచార మూలం',

    expiry_date_label: 'గడువు తేదీ',
    status_valid: 'చెల్లుబాటు అయ్యేది (Valid)',
    status_expiring_soon: 'త్వరలో గడువు ముగుస్తుంది',
    status_expired: 'గడువు ముగిసింది (Expired)',
    status_not_detected: 'గడువు తేదీ గుర్తించబడలేదు',
    status_unable_to_verify: 'నిర్ధారించలేకపోయాము',
    expiry_not_detected_desc: 'అందించిన చిత్రం నుండి గడువు తేదీని గుర్తించలేకపోయాము. దయచేసి మందుల ప్యాకింగ్‌పై ముద్రించిన EXP వివరాలను తనిఖీ చేయండి.',
    expiry_expired_warning: 'హెచ్చరిక: ఈ మందు గడువు ముగిసినట్లు కనిపిస్తోంది. గడువు ముగిసిన మందును ఉపయోగించవద్దు.',
    expiry_expiring_soon_warning: 'జాగ్రత్త: ఈ మందు గడువు త్వరలో ముగుస్తుంది. ఉపయోగించే ముందు ఫార్మాసిస్ట్‌ను సంప్రదించండి.',
    expiry_valid_desc: 'గడువు తేదీ చెల్లుబాటు అవుతుంది. ఉపయోగించే ముందు ప్యాకింగ్ సరిగ్గా ఉందో లేదో చూడండి.',

    btn_listen: 'వినండి',
    btn_stop: 'ఆపు',
    voice_playing: 'ఆడియో ప్లే అవుతోంది...',
    voice_unavailable_msg: 'ఈ భాషకు వాయిస్ సహాయం మీ పరికరం/బ్రౌజర్‌లో అందుబాటులో లేదు.',

    loading_analyzing: 'మందు చిత్రం విశ్లేషించబడుతోంది...',
    loading_searching: 'మందు సమాచారం శోధించబడుతోంది...',
    loading_step_ocr: 'చిత్రం నుండి వచనాన్ని చదవడం',
    loading_step_verify: 'మందు వివరాలను తనిఖీ చేయడం',
    error_title: 'సమాచారం',
    error_network: 'ఇప్పుడు మందు సమాచారాన్ని పొందలేకపోయాము. మీ ఇంటర్నెట్ కనెక్షన్ తనిఖీ చేయండి.',
    error_backend: 'మందు సమాచారం తాత్కాలికంగా లభ్యం కావడం లేదు. మళ్ళీ ప్రయత్నించండి.',
    error_not_found: 'మందు సమాచారం దొరకలేదు. పేరు సరిగ్గా ఉందో లేదో చూడండి లేదా స్పష్టమైన చిత్రాన్ని అప్‌లోడ్ చేయండి.',
    error_image_invalid: 'దయచేసి సరైన చిత్ర ఫైల్‌ను (JPG, PNG, WEBP) అప్‌లోడ్ చేయండి.',
    btn_retry: 'మళ్ళీ ప్రయత్నించండి',

    safety_notice_title: 'ముఖ్యమైన రక్షణ నోటీసు',
    safety_notice_body: 'ముఖ్య గమనిక: ఈ సమాచారం కేవలం సాధారణ విద్యా అవసరాల కోసం మాత్రమే. వ్యక్తిగత వైద్య సలహా కోసం అర్హత కలిగిన వైద్యుడిని సంప్రదించండి.',
    disclaimer_title: 'రక్షణ మరియు విద్యా ప్రకటన',
    disclaimer_body: 'MediScan AI అనేది ఒక విద్యా వైద్య సహాయకం మాత్రమే.',
    disclaimer_modal_rule1: 'MediScan AI మందులను సూచించదు లేదా వ్యాధులను నిర్ధారించదు.',
    disclaimer_modal_rule2: 'ఎల్లప్పుడూ మీ వైద్యుడు లేదా ఫార్మాసిస్ట్ సూచనలను పాటించండి.',
    disclaimer_modal_rule3: 'అత్యవసర వైద్య లక్షణాల కోసం తక్షణమే అత్యవసర సేవలను సంప్రదించండి.',
    btn_agree: 'నేను అర్థం చేసుకున్నాను'
  },

  ml: {
    nav_home: 'ഹോം',
    nav_scan: 'മരുന്ന് സ്കാൻ ചെയ്യുക',
    nav_search: 'മരുന്ന് തിരയുക',
    nav_recent: 'സമീപകാല തിരച്ചിലുകൾ',

    hero_title: 'നിങ്ങളുടെ മരുന്നിനെക്കുറിച്ചറിയൂ. സുരക്ഷിതരായിരിക്കൂ.',
    hero_subtitle: 'മരുന്നിന്റെ ചിത്രം അപ്‌ലോഡ് ചെയ്ത് ഉപയോഗങ്ങളും മുൻകരുതലുകളും കാലാവധിയും എളുപ്പത്തിൽ മനസിലാക്കൂ.',
    btn_scan: 'ചിത്രം സ്കാൻ ചെയ്യുക',
    btn_search: 'മരുന്ന് തിരയുക',
    feat_scan: 'പാക്കേജിംഗ് സ്കാൻ',
    feat_scan_desc: 'മരുന്നിന്റെ പാക്കറ്റുകൾ സ്കാൻ ചെയ്യുക.',
    feat_ocr: 'മരുന്ന് തിരിച്ചറിയൽ',
    feat_ocr_desc: 'ചിത്രങ്ങളിൽ നിന്ന് പേരും അളവും കണ്ടെത്തുക.',
    feat_safety: 'സുരക്ഷാ മുന്നറിയിപ്പുകൾ',
    feat_safety_desc: 'വ്യക്തമായ കാലാവധി വിവരങ്ങൾ.',
    feat_lang: '6 ഭാഷകൾ',
    feat_lang_desc: 'ഇംഗ്ലീഷ്, മലയാളം, തമിഴ്, ഹിന്ദി, തെലുങ്ക്, കന്നഡ.',
    feat_voice: 'ശബ്ദ സഹായം',
    feat_voice_desc: 'ശബ്ദ സഹായ സംവിധാനം.',

    scan_title: 'മരുന്നിന്റെ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക',
    scan_subtitle: 'മരുന്നിന്റെ പാക്കറ്റ് അല്ലെങ്കിൽ കുപ്പിയുടെ ചിത്രം നൽകി കാലാവധി പരിശോധിക്കൂ.',
    scan_drop: 'മരുന്നിന്റെ ചിത്രം ഇവിടെ ഇടുക',
    scan_or: 'അല്ലെങ്കിൽ ഫോണിൽ നിന്ന് തിരഞ്ഞെടുക്കുക',
    scan_supports: 'JPG, PNG, WEBP പിന്തുണയ്ക്കുന്നു',
    scan_sample_title: 'അല്ലെങ്കിൽ മാതൃകാ ചിത്രത്തിൽ ക്ലിക്ക് ചെയ്യുക:',
    btn_analyze: 'പരിശോധിക്കുക',
    btn_change_image: 'ചിത്രം മാറ്റുക',
    selected_image: 'തിരഞ്ഞെടുത്ത ചിത്രം',

    search_title: 'മരുന്ന് വിവര തിരച്ചിൽ',
    search_subtitle: 'മരുന്നിന്റെ വിവരങ്ങൾ അറിയാൻ പേര് നൽകുക.',
    search_placeholder: 'മരുന്നിന്റെ പേര് നൽകുക (ഉദാ: Paracetamol, Cetirizine)...',
    popular_label: 'ജനപ്രിയ തിരച്ചിലുകൾ:',

    recent_title: 'സമീപകാല സ്കാനുകൾ',
    recent_empty_title: 'സ്കാനുകളൊന്നും കണ്ടെത്തിയില്ല',
    recent_empty_desc: 'വിവരങ്ങൾ അറിയാൻ ഒരു മരുന്ന് സ്കാൻ ചെയ്യുക.',
    btn_clear_history: 'ചരിത്രം ഒഴിവാക്കുക',
    btn_back: 'തിരികെ പോകുക',

    label_generic: 'പ്രധാന ഘടകം',
    label_category: 'മരുന്ന് വിഭാഗം',
    label_strength: 'അളവ് (Strength)',
    label_prescription: 'പ്രിസ്ക്രിപ്ഷൻ അവസ്ഥ',
    label_manufacturer: 'നിർമ്മാതാവ്',
    label_brands: 'ബ്രാൻഡുകൾ (Brands)',
    label_status: 'അവസ്ഥ',
    uses: 'എന്തിനുവേണ്ടി ഉപയോഗിക്കുന്നു',
    dosage: 'പ്രവർത്തന രീതി',
    food: 'ഭക്ഷണ നിർദ്ദേശങ്ങൾ',
    timing: 'സമയ ക്രമം',
    side_effects: 'പാർശ്വഫലങ്ങൾ',
    precautions: 'മുൻകരുതലുകൾ',
    interactions: 'മരുന്ന് ഇടപെടലുകൾ',
    storage: 'സൂക്ഷിക്കേണ്ട രീതി',
    expiry: 'കാലാവധി വിവരം',
    source: 'വിവര ഉറവിടം',

    expiry_date_label: 'കാലാവധി തീയതി',
    status_valid: 'കാലാവധിയുള്ളത് (Valid)',
    status_expiring_soon: 'ഉടൻ കാലാവധി തീരും',
    status_expired: 'കാലാവധി കഴിഞ്ഞു (Expired)',
    status_not_detected: 'കാലാവധി തീയതി കണ്ടെത്തിയില്ല',
    status_unable_to_verify: 'സ്ഥിരീകരിക്കാനായില്ല',
    expiry_not_detected_desc: 'ചിത്രത്തിൽ നിന്ന് കാലാവധി തീയതി കണ്ടെത്താൻ കഴിഞ്ഞില്ല. മരുന്നിന്റെ പാക്കറ്റിലെ EXP വിവരം പരിശോധിക്കുക.',
    expiry_expired_warning: 'മുന്നറിയിപ്പ്: ഈ മരുന്നിന്റെ കാലാവധി കഴിഞ്ഞതായി കാണുന്നു. കാലാവധി കഴിഞ്ഞ മരുന്ന് ഉപയോഗിക്കരുത്.',
    expiry_expiring_soon_warning: 'ജാഗ്രത: ഈ മരുന്നിന്റെ കാലാവധി ഉടൻ അവസാനിക്കും. ഡോക്ടറോടോ ഫാർമസിസ്റ്റിനോടോ ചോദിക്കുക.',
    expiry_valid_desc: 'കാലാവധി തീയതി വ്യക്തമാണ്. ഉപയോഗിക്കുന്നതിന് മുൻപ് പാക്കറ്റ് കേടുപാടുകൾ ഇല്ലാത്തതാണെന്ന് ഉറപ്പാക്കുക.',

    btn_listen: 'കേൾക്കുക',
    btn_stop: 'നിർത്തുക',
    voice_playing: 'ശബ്ദം കേൾപ്പിക്കുന്നു...',
    voice_unavailable_msg: 'ഈ ഭാഷയിലെ ശബ്ദ സഹായം നിങ്ങളുടെ ഫോണിൽ/ബ്രൗസറിൽ ലഭ്യമല്ല.',

    loading_analyzing: 'ചിത്രം പരിശോധിക്കുന്നു...',
    loading_searching: 'വിവരങ്ങൾ തിരയുന്നു...',
    loading_step_ocr: 'എഴുത്തുകൾ വായിക്കുന്നു',
    loading_step_verify: 'വിവരങ്ങൾ ഉറപ്പാക്കുന്നു',
    error_title: 'അറിയിപ്പ്',
    error_network: 'വിവരങ്ങൾ ശേഖരിക്കാൻ കഴിഞ്ഞില്ല. ഇന്റർനെറ്റ് കണക്ഷൻ പരിശോധിക്കുക.',
    error_backend: 'സേവനം താൽക്കാലികമായി ലഭ്യമല്ല. വീണ്ടും ശ്രമിക്കുക.',
    error_not_found: 'മരുന്ന് വിവരങ്ങൾ കണ്ടെത്താനായില്ല. പേര് ശരിയാണോ എന്ന് പരിശോധിക്കുക.',
    error_image_invalid: 'ശരിയായ ചിത്രം (JPG, PNG, WEBP) നൽകുക.',
    btn_retry: 'വീണ്ടും ശ്രമിക്കുക',

    safety_notice_title: 'പ്രധാന സുരക്ഷാ അറിയിപ്പ്',
    safety_notice_body: 'പ്രധാനം: ഈ വിവരങ്ങൾ അറിവിലേക്കായി മാത്രമുള്ളതാണ്. വിദഗ്ദ്ധ ഡോക്ടറുടെ ഉപദേശത്തിന് പകരമാവില്ല.',
    disclaimer_title: 'സുരക്ഷാ അറിയിപ്പ്',
    disclaimer_body: 'MediScan AI അറിവിലേക്കായി മാത്രമുള്ള ഒരു സഹായിയാണ്.',
    disclaimer_modal_rule1: 'MediScan AI മരുന്നുകൾ നിർദ്ദേശിക്കുകയോ രോഗനിർണ്ണയം നടത്തുകയോ ചെയ്യുന്നില്ല.',
    disclaimer_modal_rule2: 'എപ്പോഴും ഡോക്ടറുടെ നിർദ്ദേശങ്ങൾ പാലിക്കുക.',
    disclaimer_modal_rule3: 'അടിയന്തിര സാഹചര്യങ്ങളിൽ ഉടൻ തന്നെ മെഡിക്കൽ സഹായം തേടുക.',
    btn_agree: 'മനസ്സിലായി'
  },

  kn: {
    nav_home: 'ಮುಖಪುಟ',
    nav_scan: 'ಔಷಧಿ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ',
    nav_search: 'ಔಷಧಿ ಹುಡುಕಿ',
    nav_recent: 'ಇತ್ತೀಚಿನ ಹುಡುಕಾಟಗಳು',

    hero_title: 'ನಿಮ್ಮ ಔಷಧಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ. ಸುರಕ್ಷಿತವಾಗಿರಿ.',
    hero_subtitle: 'ಔಷಧಿಯ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಅಥವಾ ಹೆಸರಿನಿಂದ ಹುಡುಕಿ, ಬಳಕೆಗಳು ಮತ್ತು ಕಾಲ್ಅವಧಿ ದಿನಾಂಕದ ಮಾಹಿತಿ ಪಡೆಯಿರಿ.',
    btn_scan: 'ಚಿತ್ರ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ',
    btn_search: 'ಔಷಧಿ ಹುಡುಕಿ',
    feat_scan: 'ಪ್ಯಾಕೇಜಿಂಗ್ ಸ್ಕ್ಯಾನ್',
    feat_scan_desc: 'ಔಷಧಿ ಪ್ಯಾಕ್, ಬಾಕ್ಸ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.',
    feat_ocr: 'ಔಷಧಿ ಗುರುತಿಸುವಿಕೆ',
    feat_ocr_desc: 'ಚಿತ್ರಗಳಿಂದ ಔಷಧಿಯ ಹೆಸರು ಗುರುತಿಸಿ.',
    feat_safety: 'ಸುರಕ್ಷತಾ ಎಚ್ಚರಿಕೆಗಳು',
    feat_safety_desc: 'ಸ್ಪಷ್ಟ ಕಾಲ್ಅವಧಿ ಎಚ್ಚರಿಕೆಗಳು.',
    feat_lang: '6 ಭಾಷೆಗಳು',
    feat_lang_desc: 'ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್, ಹಿಂದಿ, ತಮಿಳು, ತೆಲುಗು, ಮಲಯಾಳಂ.',
    feat_voice: 'ಧ್ವನಿ ನೆರವು',
    feat_voice_desc: 'ಧ್ವನಿ ಓದುವಿಕೆ ಸೌಲಭ್ಯ.',

    scan_title: 'ಔಷಧಿ ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    scan_subtitle: 'ಔಷಧಿ ಪ್ಯಾಕ್, ಬಾಕ್ಸ್ ಅಥವಾ ಬಾಟಲಿ ಚಿತ್ರವನ್ನು ಹಾಕಿ ಕಾಲ್ಅವಧಿ ಪರಿಶೀಲಿಸಿ.',
    scan_drop: 'ಔಷಧಿ ಚಿತ್ರವನ್ನು ಇಲ್ಲಿಗೆ ಎಳೆಯಿರಿ',
    scan_or: 'ಅಥವಾ ಸಾಧನದಿಂದ ಆಯ್ಕೆಮಾಡಿ',
    scan_supports: 'JPG, PNG, WEBP ಬೆಂಬಲಿಸುತ್ತದೆ',
    scan_sample_title: 'ಅಥವಾ ಮಾದರಿ ಚಿತ್ರವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ:',
    btn_analyze: 'ವಿಶ್ಲೇಷಿಸಿ',
    btn_change_image: 'ಚಿತ್ರ ಬದಲಿಸಿ',
    selected_image: 'ಆಯ್ಕೆಮಾಡಿದ ಚಿತ್ರ',

    search_title: 'ಔಷಧಿ ಮಾಹಿತಿ ಹುಡುಕಾಟ',
    search_subtitle: 'ಮಾಹಿತಿ ಪಡೆಯಲು ಔಷಧಿಯ ಹೆಸರು ನಮೂದಿಸಿ.',
    search_placeholder: 'ಔಷಧಿಯ ಹೆಸರು ನಮೂದಿಸಿ (ಉದಾ: Paracetamol, Cetirizine)...',
    popular_label: 'ಜನಪ್ರಿಯ ಹುಡುಕಾಟಗಳು:',

    recent_title: 'ಇತ್ತೀಚಿನ ಹುಡುಕಾಟಗಳು',
    recent_empty_title: 'ಯಾವುದೇ ಸ್ಕ್ಯಾನ್ ಕಂಡುಬಂದಿಲ್ಲ',
    recent_empty_desc: 'ಮಾಹಿತಿ ಪಡೆಯಲು ಔಷಧಿಯನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.',
    btn_clear_history: 'ಇತಿಹಾಸ ಅಳಿಸಿ',
    btn_back: 'ಹಿಂದಕ್ಕೆ ಹೋಗಿ',

    label_generic: 'ಸಕ್ರಿಯ ಘಟಕ',
    label_category: 'ಔಷಧಿ ವರ್ಗ',
    label_strength: 'ಪ್ರಮಾಣ (Strength)',
    label_prescription: 'ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಸ್ಥಿತಿ',
    label_manufacturer: 'ತಯಾರಕರು',
    label_brands: 'ಬ್ರಾಂಡ್‌ಗಳು (Brands)',
    label_status: 'ಸ್ಥಿತಿ',
    uses: 'ಉಪಯೋಗಗಳು',
    dosage: 'ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ',
    food: 'ಆಹಾರ ಸೂಚನೆಗಳು',
    timing: 'ಸಮಯದ ಮಾರ್ಗದರ್ಶನ',
    side_effects: 'ಅಡ್ಡಪರಿಣಾಮಗಳು',
    precautions: 'ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು',
    interactions: 'ಔಷಧಿ ಸಂವಹನಗಳು',
    storage: 'ಸಂಗ್ರಹಣೆ ಸೂಚನೆಗಳು',
    expiry: 'ಕಾಲ್ಅವಧಿ ಮಾಹಿತಿ',
    source: 'ಮಾಹಿತಿಯ ಮೂಲ',

    expiry_date_label: 'ಕಾಲ್ಅವಧಿ ದಿನಾಂಕ',
    status_valid: 'ಮಾನ್ಯವಾಗಿದೆ (Valid)',
    status_expiring_soon: 'ಶೀಘ್ರದಲ್ಲೇ ಮುಕ್ತಾಯಗೊಳ್ಳಲಿದೆ',
    status_expired: 'ಕಾಲ್ಅವಧಿ ಮುಗಿದಿದೆ (Expired)',
    status_not_detected: 'ಕಾಲ್ಅವಧಿ ದಿನಾಂಕ ಕಂಡುಬಂದಿಲ್ಲ',
    status_unable_to_verify: 'ಪರಿಶೀಲಿಸಲು ಸಾಧ್ಯವಾಗಿಲ್ಲ',
    expiry_not_detected_desc: 'ಚಿತ್ರದಿಂದ ಕಾಲ್ಅವಧಿ ದಿನಾಂಕ ಪತ್ತೆಯಾಗಿಲ್ಲ. ದಯವಿಟ್ಟು ಔಷಧಿಯ ಮೇಲಿರುವ EXP ವಿವರ ಪರಿಶೀಲಿಸಿ.',
    expiry_expired_warning: 'ಎಚ್ಚರಿಕೆ: ಈ ಔಷಧಿಯ ಕಾಲ್ಅವಧಿ ಮುಗಿದಿದೆ. ಕಾಲ್ಅವಧಿ ಮುಗಿದ ಔಷಧಿಯನ್ನು ಬಳಸಬೇಡಿ.',
    expiry_expiring_soon_warning: 'ಎಚ್ಚರಿಕೆ: ಈ ಔಷಧಿಯ ಕಾಲ್ಅವಧಿ ಶೀಘ್ರದಲ್ಲೇ ಮುಗಿಯಲಿದೆ. ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    expiry_valid_desc: 'ಕಾಲ್ಅವಧಿ ದಿನಾಂಕ ಮಾನ್ಯವಾಗಿದೆ. ಬಳಸುವ ಮೊದಲು ಪ್ಯಾಕಿಂಗ್ ಪರಿಶೀಲಿಸಿ.',

    btn_listen: 'ಕೇಳಿ',
    btn_stop: 'ನಿಲ್ಲಿಸಿ',
    voice_playing: 'ಧ್ವನಿ ಪ್ರಸಾರವಾಗುತ್ತಿದೆ...',
    voice_unavailable_msg: 'ಈ ಭಾಷೆಯ ಧ್ವನಿ ಸೌಲಭ್ಯ ನಿಮ್ಮ ಸಾಧನದಲ್ಲಿ ಲಭ್ಯವಿಲ್ಲ.',

    loading_analyzing: 'ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...',
    loading_searching: 'ಮಾಹಿತಿ ಹುಡುಕಲಾಗುತ್ತಿದೆ...',
    loading_step_ocr: 'ಪಠ್ಯವನ್ನು ಓದಲಾಗುತ್ತಿದೆ',
    loading_step_verify: 'ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ',
    error_title: 'ಸೂಚನೆ',
    error_network: 'ಮಾಹಿತಿ ಪಡೆಯಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕ ಪರಿಶೀಲಿಸಿ.',
    error_backend: 'ಸೇವೆ ತಾತ್ಕಾಲಿಕವಾಗಿ ಲಭ್ಯವಿಲ್ಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
    error_not_found: 'ಮಾಹಿತಿ ಸಿಗಲಿಲ್ಲ. ಔಷಧಿಯ ಹೆಸರು ಸರಿಯಾಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ.',
    error_image_invalid: 'ಸರಿಯಾದ ಚಿತ್ರ ಫೈಲ್ (JPG, PNG, WEBP) ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.',
    btn_retry: 'ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ',

    safety_notice_title: 'ಪ್ರಮುಖ ಸುರಕ್ಷತಾ ಸೂಚನೆ',
    safety_notice_body: 'ಪ್ರಮುಖ: ಈ ಮಾಹಿತಿಯು ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ. ವೈದ್ಯರ ಸಲಹೆಯನ್ನು ಪಡೆಯುವುದು ಕಡ್ಡಾಯ.',
    disclaimer_title: 'ಸುರಕ್ಷತಾ ಸೂಚನೆ',
    disclaimer_body: 'MediScan AI ಕೇವಲ ಶೈಕ್ಷಣಿಕ ನೆರವಿಗಾಗಿ ಮಾತ್ರ.',
    disclaimer_modal_rule1: 'MediScan AI ಔಷಧಿಗಳನ್ನು ಸೂಚಿಸುವುದಿಲ್ಲ.',
    disclaimer_modal_rule2: 'ಯಾವಾಗಲೂ ವೈದ್ಯರ ಸೂಚನೆಗಳನ್ನು ಪಾಲಿಸಿ.',
    disclaimer_modal_rule3: 'ತುರ್ತು ಸಂದರ್ಭಗಳಲ್ಲಿ ತಕ್ಷಣ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    btn_agree: 'ನನಗೆ ಅರ್ಥವಾಯಿತು'
  }
};

/**
 * Medical Dictionary for Content Localization
 * Maps exact paragraphs, terms, metadata, and sentences to target languages.
 */
const MEDICAL_FIELD_TRANSLATIONS = {
  // Categories & Metadata
  'analgesic & antipyretic (pain reliever & fever reducer)': {
    ta: 'வலி நிவாரணி & காய்ச்சல் குறைப்பான்',
    hi: 'दर्द निवारक और बुखार रोधी',
    te: 'నొప్పి నివారణి & జ్వరం నివారిణి',
    ml: 'വേദന സംഹാരിയും പനി കുറയ്ക്കുന്ന മരുന്നും',
    kn: 'ನೋವು ನಿವಾರಕ ಮತ್ತು ಜ್ವರ ನಿವಾರಕ'
  },
  'analgesic & antipyretic (pain relief & fever reducer)': {
    ta: 'வலி நிவாரணி & காய்ச்சல் குறைப்பான்',
    hi: 'दर्द निवारक और बुखार रोधी',
    te: 'నొప్పి నివారణి & జ్వరం నివారిణి',
    ml: 'വേദന സംഹാരിയും പനി കുറയ്ക്കുന്ന മരുന്നും',
    kn: 'ನೋವು ನಿವಾರಕ ಮತ್ತು ಜ್ವರ ನಿವಾರಕ'
  },
  'second-generation antihistamine (anti-allergy)': {
    ta: 'இரண்டாம் தலைமுறை ஆன்டிஹிஸ்டமைன் (ஒவ்வாமை எதிர்ப்பு)',
    hi: 'द्वितीय पीढ़ी एंटीहिस्टामाइन (एलर्जी रोधी)',
    te: 'రెండవ తరం యాంటిహిస్టామైన్ (అలెర్జీ నిరోధకం)',
    ml: 'ആന്റി അലർജി മരുന്ന്',
    kn: 'ಎರಡನೇ ತಲೆಮಾರಿನ ಆಂಟಿಹಿಸ್ಟಮೈನ್ (ಅಲರ್ಜಿ ನಿರೋಧಕ)'
  },
  'penicillin-class antibiotic': {
    ta: 'பெனிசிலின் வகை ஆண்டிபயாடிக் (நுண்ணுயிர் எதிர்ப்பி)',
    hi: 'पेनिसिलिन श्रेणी का एंटीबायोटिक',
    te: 'పెన్సిలిన్ తరగతి యాంటీబయోటిక్',
    ml: 'പെൻസിലിൻ ആന്റിബയോട്ടിക്',
    kn: 'ಪೆನಿಸಿಲಿನ್ ವರ್ಗದ ಆಂಟಿಬಯೋಟಿಕ್'
  },
  'nonsteroidal anti-inflammatory drug (nsaid)': {
    ta: 'அழற்சி எதிர்ப்பு மருந்து (NSAID)',
    hi: 'गैर-स्टेरायॉइडल विरोधी भड़काऊ दवा (NSAID)',
    te: 'స్టెరాయిడ్ కాని తాప నిరోధక ఔషధం (NSAID)',
    ml: 'എൻഎസ്എഐഡി വീക്കം കുറയ്ക്കുന്ന മരുന്ന്',
    kn: 'ಉರಿಯೂತ ನಿವಾರಕ ಔಷಧ (NSAID)'
  },
  'pharmaceutical formulations': {
    ta: 'மருந்து சூத்திரங்கள்',
    hi: 'फार्मास्युटिकल फॉर्मूलेशन',
    te: 'ఫార్మాస్యూటికల్ ఫార్ములేషన్స్',
    ml: 'മരുന്ന് മിശ്രിതങ്ങൾ',
    kn: 'ಫಾರ್ಮಾಸ್ಯೂಟಿಕಲ್ ಸೂತ್ರೀಕರಣಗಳು'
  },
  'human prescription drug': {
    ta: 'மருத்துவச் சீட்டு தேவைப்படும் மருந்து',
    hi: 'प्रिस्क्रिप्शन दवा',
    te: 'ప్రిస్క్రిప్షన్ ఔషధం',
    ml: 'പ്രിസ്ക്രിപ്ഷൻ മരുന്ന്',
    kn: 'ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಔಷಧ'
  },
  'human otc drug': {
    ta: 'நேரடி விற்பனை மருந்து (OTC)',
    hi: 'बिना पर्चे की दवा (OTC)',
    te: 'ప్రిస్క్రిప్షన్ లేని ఔషధం (OTC)',
    ml: 'സാധാരണ മരുന്ന് (OTC)',
    kn: 'ಸಾಮಾನ್ಯ ಔಷಧ (OTC)'
  },
  'therapeutic agent': {
    ta: 'சிகிச்சை மருந்து',
    hi: 'चिकित्सीय एजेंट',
    te: 'చికిత్సా ఏజెంట్',
    ml: 'ചികിത്സാ മരുന്ന്',
    kn: 'ಚಿಕಿತ್ಸಕ ಏಜೆಂಟ್'
  },

  // Prescription Statuses
  'over-the-counter (otc)': {
    ta: 'மருத்துவச் சீட்டு தேவையில்லை (OTC)',
    hi: 'बिना पर्चे की दवा (OTC)',
    te: 'ప్రిస్క్రిప్షన్ లేకుండా దొరికేది (OTC)',
    ml: 'പ്രിസ്ക്രിപ്ഷൻ ആവശ്യമില്ലാത്തത് (OTC)',
    kn: 'ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ರಹಿತ (OTC)'
  },
  'prescription-only medicine (rx)': {
    ta: 'மருத்துவச் சீட்டு அவசியம் (Rx)',
    hi: 'डॉक्टर के पर्चे की दवा (Rx)',
    te: 'ప్రిస్క్రిప్షన్ అవసరం (Rx)',
    ml: 'ഡോക്ടറുടെ കുറിപ്പടി വേണം (Rx)',
    kn: 'ವೈದ್ಯರ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಅಗತ್ಯ (Rx)'
  },
  'prescription required (rx)': {
    ta: 'மருத்துவச் சீட்டு அவசியம் (Rx)',
    hi: 'डॉक्टर के पर्चे की दवा (Rx)',
    te: 'ప్రిస్క్రిప్షన్ అవసరం (Rx)',
    ml: 'ഡോക്ടറുടെ കുറിപ്പടി വേണം (Rx)',
    kn: 'ವೈದ್ಯರ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಅಗತ್ಯ (Rx)'
  },
  'prescription required': {
    ta: 'மருத்துவச் சீட்டு தேவைப்படுகிறது',
    hi: 'प्रिस्क्रिप्शन आवश्यक',
    te: 'ప్రిస్క్రిప్షన్ అవసరం',
    ml: 'പ്രിസ്ക്രിപ്ഷൻ വേണം',
    kn: 'ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಅಗತ್ಯವಿದೆ'
  },
  'over-the-counter (otc) / prescription depending on pack size': {
    ta: 'அளவைப் பொறுத்து OTC / மருத்துவச் சீட்டு தேவை',
    hi: 'पैक के आकार के आधार पर OTC / प्रिस्क्रिप्शन',
    te: 'ప్యాక్ పరిమాణాన్ని బట్టి OTC / ప్రిస్క్రిప్షన్',
    ml: 'പാക്കിന്റെ അളവ് അനുസരിച്ച് OTC / പ്രിസ്ക്രിപ്ഷൻ',
    kn: 'ಪ್ರಮಾಣಕ್ಕೆ ತಕ್ಕಂತೆ OTC / ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್'
  },
  'otc / prescription': {
    ta: 'OTC / மருத்துவச் சீட்டு தேவை',
    hi: 'OTC / प्रिस्क्रिप्शन',
    te: 'OTC / ప్రిస్క్రిప్షన్',
    ml: 'OTC / പ്രിസ്ക്രിപ്ഷൻ',
    kn: 'OTC / ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್'
  },

  // Manufacturers
  'multiple certified pharmaceutical manufacturers (e.g., micro labs, gsk, cipla)': {
    ta: 'சான்றளிக்கப்பட்ட பல மருந்து தயாரிப்பாளர்கள் (எ.கா. Micro Labs, GSK, Cipla)',
    hi: 'कई प्रमाणित दवा निर्माता (जैसे, Micro Labs, GSK, Cipla)',
    te: 'అనేక ధృవీకరించబడిన ఔషధ తయారీదారులు (ఉదా: Micro Labs, GSK, Cipla)',
    ml: 'വിവിധ അംഗീകൃത മരുന്ന് നിർമ്മാതാക്കൾ',
    kn: 'ಅನೇಕ ಮಾನ್ಯತೆ పొందిన ಔಷಧ ತಯಾರಕರು'
  },
  'global generic manufacturers (e.g., dr. reddy\'s, sun pharma, cipla)': {
    ta: 'உலகளாவிய ஜெனரிக் மருந்து தயாரிப்பாளர்கள் (எ.கா. Dr. Reddy\'s, Sun Pharma, Cipla)',
    hi: 'वैश्विक जेनेरिक दवा निर्माता (जैसे, Dr. Reddy\'s, Sun Pharma, Cipla)',
    te: 'గ్లోబల్ జెనెరిక్ ఔషధ తయారీదారులు (ఉదా: Dr. Reddy\'s, Sun Pharma, Cipla)',
    ml: 'ആഗോള ജനറിക് മരുന്ന് നിർമ്മാതാക്കൾ',
    kn: 'ಜಾಗತಿಕ ಜೆನೆರಿಕ್ ಔಷಧ ತಯಾರಕರು'
  },
  'licensed pharmaceutical formulators (e.g., alkem, cipla, gsk)': {
    ta: 'உரிமம் பெற்ற மருந்து தயாரிப்பாளர்கள் (எ.கா. Alkem, Cipla, GSK)',
    hi: 'लाइसेंस प्राप्त फार्मास्युटिकल निर्माता (जैसे, Alkem, Cipla, GSK)',
    te: 'లైసెన్స్ పొందిన ఔషధ తయారీదారులు (ఉదా: Alkem, Cipla, GSK)',
    ml: 'ലൈസൻസുള്ള മരുന്ന് നിർമ്മാതാക്കൾ',
    kn: 'ಲೈಸೆನ್ಸ್ ಪಡೆದ ಔಷಧ ತಯಾರಕರು'
  },
  'multiple pharmaceutical formulators': {
    ta: 'பல்வேறு மருந்து தயாரிப்பு நிறுவனங்கள்',
    hi: 'विभिन्न फार्मास्युटिकल निर्माता',
    te: 'వివిధ ఔషధ తయారీదారులు',
    ml: 'വിവിധ മരുന്ന് നിർമ്മാണ കമ്പനികൾ',
    kn: 'ವಿವಿಧ ಔಷಧ ತಯಾರಕರು'
  },
  'licensed pharmaceutical manufacturer': {
    ta: 'உரிமம் பெற்ற மருந்து தயாரிப்பாளர்',
    hi: 'लाइसेंस प्राप्त फार्मास्युटिकल निर्माता',
    te: 'లైసెన్స్ పొందిన ఔషధ తయారీదారు',
    ml: 'ലൈസൻസുള്ള മരുന്ന് നിർമ്മാതാവ്',
    kn: 'ಲೈಸೆನ್ಸ್ ಪಡೆದ ಔಷಧ ತಯಾರಕರು'
  },
  'fda registered manufacturer': {
    ta: 'எஃப்.டி.ஏ பதிவுசெய்த தயாரிப்பாளர்',
    hi: 'एफडीए पंजीकृत निर्माता',
    te: 'ఎఫ్.డి.ఎ నమోదిత తయారీదారు',
    ml: 'എഫ്.ഡി.എ രജിസ്റ്റർ ചെയ്ത നിർമ്മാതാവ്',
    kn: 'ಎಫ್‌ಡಿಎ ನೋಂದಾಯಿತ ತಯಾರಕರು'
  },

  // Strengths
  'standard dosage form': {
    ta: 'தரப்படுத்தப்பட்ட அளவு படிவம்',
    hi: 'मानक खुराक रूप',
    te: 'ప్రామాణిక మోతాదు రూపం',
    ml: 'സാധാരണ അളവ് രൂപം',
    kn: 'ಪ್ರಮಾಣಿತ ಪ್ರಮಾಣ ರೂಪ'
  },
  'as prescribed': {
    ta: 'மருத்துவர் பரிந்துரைத்தபடி',
    hi: 'चिकित्सक के निर्देशानुसार',
    te: 'వైద్యుడు సూచించిన విధంగా',
    ml: 'ഡോക്ടർ നിർദ്ദേശിച്ച പ്രകാരം',
    kn: 'ವೈದ್ಯರು ಸೂಚಿಸಿದಂತೆ'
  },

  // Sources
  'u.s. national library of medicine & who essential medicines registry': {
    ta: 'அமெரிக்க தேசிய மருத்துவ நூலகம் & உலக சுகாதார அமைப்பு மருந்துப் பதிவேடு',
    hi: 'यू.एस. नेशनल लाइब्रेरी ऑफ मेडिसिन और डब्ल्यूएचओ आवश्यक दवा रजिस्ट्री',
    te: 'యు.ఎస్. నేషనల్ లైబ్రరీ ఆఫ్ మెడిసిన్ & డబ్ల్యూహెచ్ఓ ఔషధ రిజిస్ట్రీ',
    ml: 'യു.എസ്. നാഷണൽ ലൈബ്രറി ഓഫ് മെഡിസിൻ & ഡബ്ല്യു.എച്ച്.ഒ മരുന്ന് രജിസ്ട്രി',
    kn: 'ಯು.ಎಸ್. ನ್ಯಾಷನಲ್ ಲೈಬ್ರರಿ ಆಫ್ ಮೆಡಿಸಿನ್ & ಡಬ್ಲ್ಯೂಎಚ್‌ಒ ಔಷಧ ನೋಂದಣಿ'
  },
  'nih medlineplus drug information': {
    ta: 'என்.ஐ.எச் மெட்லைன் பிளஸ் மருந்து தகவல்',
    hi: 'एनआईएच मेडलाइनप्लस दवा जानकारी',
    te: 'ఎన్.ఐ.హెచ్ మెడ్‌లైన్ ప్లస్ ఔషధ సమాచారం',
    ml: 'എൻ.ഐ.എച്ച് മെഡ്‌ലൈൻ പ്ലസ് മരുന്ന് വിവരം',
    kn: 'ಎನ್‌ಐಎಚ್ ಮೆಡ್‌ಲೈನ್ ಪ್ಲಸ್ ಔಷಧ ಮಾಹಿತಿ'
  },
  'u.s. fda drug prescribing guide & rxnav': {
    ta: 'அமெரிக்க எஃப்.டி.ஏ மருந்து வழிகாட்டி & RxNav',
    hi: 'यू.एस. एफडीए दवा गाइड एवं RxNav',
    te: 'యు.ఎస్. ఎఫ్.డి.ఎ ఔషధ గైడ్ & RxNav',
    ml: 'യു.എസ്. എഫ്.ഡി.എ മരുന്ന് വിവരങ്ങൾ',
    kn: 'ಯು.ಎಸ್. ಎಫ್‌ಡಿಎ ಔಷಧ ಮಾರ್ಗದರ್ಶಿ'
  },
  'u.s. fda national drug code directory': {
    ta: 'அமெரிக்க எஃப்.டி.ஏ தேசிய மருந்து குறியீட்டு விவரம்',
    hi: 'यू.एस. एफडीए नेशनल ड्रग कोड निर्देशिका',
    te: 'యు.ఎస్. ఎఫ్.డి.ఎ జాతీయ ఔషధ కోడ్ డైరెక్టరీ',
    ml: 'യു.എസ്. എഫ്.ഡി.എ മരുന്ന് ഡയറക്ടറി',
    kn: 'ಯು.ಎಸ್. ಎಫ್‌ಡಿಎ ಔಷಧ ಡೈರೆಕ್ಟರಿ'
  },
  'mediscan verified medical database': {
    ta: 'மெடிஸ்கேன் சரிபார்க்கப்பட்ட மருத்துவ தரவுத்தளம்',
    hi: 'मेडीस्कैन सत्यापित मेडिकल डेटाबेस',
    te: 'మెడిస్కాన్ నిర్ధారిత వైద్య డేటాబేస్',
    ml: 'മെഡിസ്കാൻ സ്ഥിരീകരിച്ച മെഡിക്കൽ ഡാറ്റാബേസ്',
    kn: 'ಮೆಡಿಸ್ಕ್ಯಾನ್ ಮಾನ್ಯತೆ ಪಡೆದ ವೈದ್ಯಕೀಯ ಡೇಟಾಬೇಸ್'
  },
  'u.s. food and drug administration (openfda)': {
    ta: 'அமெரிக்க உணவு மற்றும் மருந்து நிர்வாகம் (OpenFDA)',
    hi: 'यू.एस. खाद्य एवं औषधि प्रशासन (OpenFDA)',
    te: 'యు.ఎస్. ఫుడ్ అండ్ డ్రగ్ అడ్మినిస్ట్రేషన్ (OpenFDA)',
    ml: 'യു.എസ്. ഫുഡ് ആൻഡ് ഡ്രഗ് അഡ്മിനിസ്ട്രേഷൻ (OpenFDA)',
    kn: 'ಯು.ಎಸ್. ಫುಡ್ ಅಂಡ್ ಡ್ರಗ್ ಅಡ್ಮಿನಿಸ್ಟ್ರೇಷನ್ (OpenFDA)'
  },

  // Uses
  'mild to moderate pain relief (headaches, muscle aches, toothaches, backaches) and fever reduction.': {
    ta: 'லேசான முதல் மிதமான வலி (தலைவலி, தசை வலி, பல் வலி, முதுகு வலி) மற்றும் காய்ச்சலைக் குறைக்க உதவுகிறது.',
    hi: 'हल्के से मध्यम दर्द (सिरदर्द, मांसपेशियों का दर्द, दांत दर्द, पीठ दर्द) और बुखार को कम करने के लिए उपयोग किया जाता है।',
    te: 'తేలికపాటి నుండి మితమైన నొప్పి (తలనొప్పి, కండరాల నొప్పులు, పంటి నొప్పి, వెన్నునొప్పి) మరియు జ్వరాన్ని తగ్గించడానికి ఉపయోగిస్తారు.',
    ml: 'തലവേദന, പേശി വേദന, പല്ലുവേദന, മുതുകുവേദന തുടങ്ങിയ നേരിയ വേദനകൾ കുറയ്ക്കാനും പനി കുറയ്ക്കാനും ഉപയോഗിക്കുന്നു.',
    kn: 'ಸಾಧಾರಣ ನೋವು (ತಲೆನೋವು, ಸ್ನಾಯು ನೋವು, ಹಲ್ಲಿನ ನೋವು, ಬೆನ್ನು ನೋವು) ಮತ್ತು ಜ್ವರವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಬಳಸಲಾಗುತ್ತದೆ.'
  },
  'relief of allergy symptoms such as sneezing, runny nose, watery eyes, itching, hives, and allergic rhinitis.': {
    ta: 'தும்பல், ஒழுகு மூக்கு, அரிப்பு, கண்கள் கலங்குதல் மற்றும் ஒவ்வாமை அறிகுறிகளிலிருந்து நிவாரணம் அளிக்கிறது.',
    hi: 'छींकने, बहती नाक, खुजली, आंखों में पानी और एलर्जी के लक्षणों से राहत दिलाता है।',
    te: 'తుమ్ములు, కారే ముక్కు, దురద మరియు అలెర్జీ లక్షణాల నుండి ఉపశమనం కలిగిస్తుంది.',
    ml: 'തുമ്മൽ, മൂക്കൊലിപ്പ്, ചൊറിച്ചിൽ തുടങ്ങിയ അലർജി ലക്ഷണങ്ങളിൽ നിന്ന് ആശ്വാസം നൽകുന്നു.',
    kn: 'ಸೀನು, ಮೂಗು ಸೋರುವುದು, ತುರಿಕೆ ಮತ್ತು ಅಲರ್ಜಿ ರೋಗಲಕ್ಷಣಗಳಿಂದ ಉಪಶಮನ ನೀಡುತ್ತದೆ.'
  },
  'treatment of bacterial infections including respiratory tract infections, ear/nose/throat infections, urinary tract infections, and skin infections. (not effective against viral infections like flu or common cold).': {
    ta: 'பாக்டீரியா தொற்றுகளுக்கான சிகிச்சை (சுவாசப் பாதை, காது/மூக்கு/தொண்டை, சிறுநீர் பாதை மற்றும் தோல் தொற்றுகள்). வைரஸ் தொற்றுகளுக்கு பலனளிக்காது.',
    hi: 'बैक्टीरियल संक्रमण का इलाज (श्वसन तंत्र, कान/नाक/गला, मूत्र मार्ग और त्वचा संक्रमण)। वायरल संक्रमण पर प्रभावी नहीं।',
    te: 'బ్యాక్టీరియా ఇన్ఫెక్షన్ల చికిత్స (శ్వాసకోశ, చెవి/ముక్కు/గొంతు, మూత్రనాళ ఇన్ఫెక్షన్లు). వైరల్ ఇన్ఫెక్షన్లపై పనిచేయదు.',
    ml: 'ബാക്ടീരിയ മൂലമുണ്ടാകുന്ന രോഗബാധകൾക്കുള്ള ചികിത്സ. വൈറൽ രോഗങ്ങളിൽ ഫലപ്രദമല്ല.',
    kn: 'ಬ್ಯಾಕ್ಟೀರಿಯಾದ ಸೋಂಕುಗಳ ಚಿಕಿತ್ಸೆ (ಉಸಿರಾಟದ ನಾಳ, ಕಿವಿ/ಮೂಗು/ಗಂಟಲು, ಚರ್ಮದ ಸೋಂಕುಗಳು).'
  },
  'relief of pain, inflammation, swelling, and fever associated with arthritis, menstrual cramps, headache, dental pain, and muscular aches.': {
    ta: 'வலி, வீக்கம் மற்றும் காய்ச்சல் நிவாரணம் (கீல்வாதம், மாதவிடாய் வலி, பல் வலி, தசை வலி).',
    hi: 'दर्द, सूजन और बुखार से राहत (गठिया, मासिक धर्म दर्द, दांत दर्द, मांसपेशियों का दर्द)।',
    te: 'నొప్పి, వాపు మరియు జ్వరం నుండి ఉపశమనం (కీళ్ల నొప్పులు, పంటి నొప్పి, కండరాల నొప్పులు).',
    ml: 'വേദന, വീക്കം, പനി എന്നിവ കുറയ്ക്കാൻ സഹായിക്കുന്നു (പേശി വേദന, പല്ലുവേദന).',
    kn: 'ನೋವು, ಉರಿಯೂತ ಮತ್ತು ಜ್ವರ ಉಪಶಮನ (ಕೀಲು ನೋವು, ಹಲ್ಲಿನ ನೋವು, ಸ್ನಾಯು ನೋವು).'
  },

  // Dosage Information
  'typical dosage information from referenced source: adults typically take 500mg to 650mg every 4 to 6 hours as needed. maximum daily dose for adults must not exceed 4000mg (4 grams) within 24 hours to prevent severe liver damage.': {
    ta: 'வழக்கமான அளவு விவரம்: பெரியவர்கள் தேவைக்கேற்ப 4 முதல் 6 மணி நேரத்திற்கு ஒருமுறை 500mg முதல் 650mg வரை எடுத்துக்கொள்வார்கள். 24 மணி நேரத்தில் 4000mg அளவுக்கு மிகாமல் இருக்க வேண்டும்.',
    hi: 'सामान्य खुराक जानकारी: वयस्क आवश्यकतानुसार हर 4 से 6 घंटे में 500mg से 650mg लेते हैं। 24 घंटे में अधिकतम खुराक 4000mg से अधिक नहीं होनी चाहिए।',
    te: 'సాధారణ మోతాదు సమాచారం: పెద్దలు అవసరాన్ని బట్టి ప్రతి 4 నుండి 6 గంటలకు 500mg నుండి 650mg తీసుకుంటారు. రోజుకు 4000mg మించకూడదు.',
    ml: 'സാധാരണ അളവ്: മുതിർന്നവർ ആവശ്യാനുസരണം 4 മുതൽ 6 മണിക്കൂർ ഇടവിട്ട് 500mg മുതൽ 650mg വരെ കഴിക്കുന്നു. 24 മണിക്കൂറിൽ 4000mg യിൽ കൂടരുത്.',
    kn: 'ಸಾಮಾನ್ಯ ಪ್ರಮಾಣ: ಪ್ರೌಢರು ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ 4 ರಿಂದ 6 ಗಂಟೆಗಳಿಗೊಮ್ಮೆ 500mg ಯಿಂದ 650mg ತೆಗೆದುಕೊಳ್ಳುತ್ತಾರೆ. ದಿನಕ್ಕೆ 4000mg ಮೀರಬಾರದು.'
  },
  'typical dosage information from referenced source: adults and children 12 years and older typically take one 10mg tablet once daily.': {
    ta: 'வழக்கமான அளவு விவரம்: 12 வயது மற்றும் அதற்கு மேற்பட்ட பெரியவர்கள் மற்றும் குழந்தைகள் தினமும் ஒரு முறை 10mg மாத்திரையை எடுத்துக்கொள்கிறார்கள்.',
    hi: 'सामान्य खुराक जानकारी: 12 वर्ष और उससे अधिक उम्र के वयस्क और बच्चे आमतौर पर दिन में एक बार 10mg की गोली लेते हैं।',
    te: 'సాధారణ మోతాదు సమాచారం: 12 సంవత్సరాలు మరియు అంతకంటే ఎక్కువ వయస్సు ఉన్నవారు రోజుకు ఒకసారి 10mg టాబ్లెట్ తీసుకుంటారు.',
    ml: 'സാധാരണ അളവ്: 12 വയസ്സും അതിൽ കൂടുതലുമുള്ളവർ ദിവസത്തിൽ ഒരിക്കൽ 10mg ഗുളിക കഴിക്കുന്നു.',
    kn: 'ಸಾಮಾನ್ಯ ಪ್ರಮಾಣ: 12 ವರ್ಷ ಮತ್ತು ಮೇಲ್ಪಟ್ಟವರು ದಿನಕ್ಕೆ ಒಮ್ಮೆ 10mg ಮಾತ್ರೆ ತೆಗೆದುಕೊಳ್ಳುತ್ತಾರೆ.'
  },
  'typical dosage information from referenced source: 250mg to 500mg every 8 hours, or 500mg to 875mg every 12 hours as prescribed by a licensed physician. complete the full prescribed course even if symptoms resolve early.': {
    ta: 'வழக்கமான அளவு விவரம்: மருத்துவர் பரிந்துரைத்தபடி 8 மணி நேரத்திற்கு ஒருமுறை 250mg-500mg அல்லது 12 மணி நேரத்திற்கு ஒருமுறை 500mg-875mg எடுத்துக்கொள்ளவும். முழு சிகிச்சையையும் முடிக்கவும்.',
    hi: 'सामान्य खुराक जानकारी: डॉक्टर के निर्देशानुसार हर 8 घंटे में 250mg-500mg या हर 12 घंटे में 500mg-875mg लें। पूरा कोर्स समाप्त करें।',
    te: 'సాధారణ మోతాదు సమాచారం: వైద్యుడి సలహా ప్రకారం ప్రతి 8 గంటలకు 250mg-500mg లేదా ప్రతి 12 గంటలకు 500mg-875mg తీసుకోండి. కోర్సు పూర్తి చేయండి.',
    ml: 'സാധാരണ അളവ്: ഡോക്ടറുടെ നിർദ്ദേശപ്രകാരം 8 മണിക്കൂർ ഇടവിട്ട് 250mg-500mg കഴിക്കുക. ചികിത്സാ കോഴ്സ് പൂർത്തിയാക്കുക.',
    kn: 'ಸಾಮಾನ್ಯ ಪ್ರಮಾಣ: ವೈದ್ಯರ ಸೂಚನೆಯಂತೆ ಪ್ರತಿ 8 ಗಂಟೆಗಳಿಗೊಮ್ಮೆ 250mg-500mg ತೆಗೆದುಕೊಳ್ಳಿ. ಕೋರ್ಸ್ ಪೂರ್ಣಗೊಳಿಸಿ.'
  },
  'typical dosage information from referenced source: adults take 200mg to 400mg every 4 to 6 hours with food. do not exceed 1200mg daily for otc use without medical supervision.': {
    ta: 'வழக்கமான அளவு விவரம்: பெரியவர்கள் உணவோடு 4 முதல் 6 மணி நேரத்திற்கு ஒருமுறை 200mg முதல் 400mg வரை எடுத்துக்கொள்வார்கள். மருத்துவ மேற்பார்வையின்றி 1200mg அளவுக்கு மிகக்கூடாது.',
    hi: 'सामान्य खुराक जानकारी: वयस्क भोजन के साथ हर 4 से 6 घंटे में 200mg से 400mg लेते हैं। बिना चिकित्सकीय देखरेख के 1200mg से अधिक न लें।',
    te: 'సాధారణ మోతాదు సమాచారం: పెద్దలు ఆహారంతో పాటు ప్రతి 4 నుండి 6 గంటలకు 200mg నుండి 400mg తీసుకుంటారు. రోజుకు 1200mg మించకూడదు.',
    ml: 'സാധാരണ അളവ്: മുതിർന്നവർ ഭക്ഷണത്തോടൊപ്പം 4 മുതൽ 6 മണിക്കൂർ ഇടവിട്ട് 200mg മുതൽ 400mg വരെ കഴിക്കുന്നു. 1200mg യിൽ കൂടരുത്.',
    kn: 'ಸಾಮಾನ್ಯ ಪ್ರಮಾಣ: ಪ್ರೌಢರು ಆಹಾರದೊಂದಿಗೆ ಪ್ರತಿ 4 ರಿಂದ 6 ಗಂಟೆಗಳಿಗೊಮ್ಮೆ 200mg ಯಿಂದ 400mg ತೆಗೆದುಕೊಳ್ಳುತ್ತಾರೆ. 1200mg ಮೀರಬಾರದು.'
  },

  // Food Instructions
  'can be taken with or without food. taking with food or a glass of water may reduce stomach discomfort.': {
    ta: 'உணவுடனோ அல்லது உணவில்லாமலோ எடுத்துக்கொள்ளலாம். உணவோடு அல்லது ஒரு கிளாஸ் தண்ணீருடன் எடுப்பது வயிற்று அசௌகரியத்தைக் குறைக்கும்.',
    hi: 'इसे भोजन के साथ या बिना भोजन के लिया जा सकता है। भोजन या एक गिलास पानी के साथ लेने से पेट की परेशानी कम हो सकती है।',
    te: 'ఆహారంతో లేదా ఆహారం లేకుండా తీసుకోవచ్చు. ఆహారం లేదా గ్లాసు నీటితో తీసుకోవడం వల్ల కడుపు అసౌకర్యం తగ్గుతుంది.',
    ml: 'ഭക്ഷണത്തോടൊപ്പമോ അല്ലാതെയോ കഴിക്കാം. ഭക്ഷണത്തോടൊപ്പമോ ഒരു ഗ്ലാസ് വെള്ളത്തോടൊപ്പമോ കഴിക്കുന്നത് വയറുവേദന കുറയ്ക്കും.',
    kn: 'ಆಹಾರದೊಂದಿಗೆ ಅಥವಾ ಆಹಾರವಿಲ್ಲದೆ ತೆಗೆದುಕೊಳ್ಳಬಹುದು. ಆಹಾರ ಅಥವಾ ಒಂದು ಲೋಟ ನೀರಿನೊಂದಿಗೆ ತೆಗೆದುಕೊಳ್ಳುವುದು ಹೊಟ್ಟೆಯ ಕಿರಿಕಿರಿಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.'
  },
  'may be taken with or without food.': {
    ta: 'உணவுடனோ அல்லது உணவில்லாமலோ எடுத்துக்கொள்ளலாம்.',
    hi: 'इसे भोजन के साथ या बिना भोजन के लिया जा सकता है।',
    te: 'ఆహారంతో లేదా ఆహారం లేకుండా తీసుకోవచ్చు.',
    ml: 'ഭക്ഷണത്തോടൊപ്പമോ അല്ലാതെയോ കഴിക്കാം.',
    kn: 'ಆಹಾರದೊಂದಿಗೆ ಅಥವಾ ಆಹಾರವಿಲ್ಲದೆ ತೆಗೆದುಕೊಳ್ಳಬಹುದು.'
  },
  'can be taken with or without food. taking with meals helps reduce potential stomach upset.': {
    ta: 'உணவுடனோ அல்லது உணவில்லாமலோ எடுத்துக்கொள்ளலாம். உணவோடு எடுப்பது வயிற்று அசௌகரியத்தைக் குறைக்க உதவும்.',
    hi: 'इसे भोजन के साथ या बिना भोजन के लिया जा सकता है। भोजन के साथ लेने से पेट खराब होने की संभावना कम होती है।',
    te: 'ఆహారంతో లేదా ఆహారం లేకుండా తీసుకోవచ్చు. భోజనంతో తీసుకోవడం వల్ల కడుపు ఉబ్బరం తగ్గుతుంది.',
    ml: 'ഭക്ഷണത്തോടൊപ്പമോ അല്ലാതെയോ കഴിക്കാം. ഭക്ഷണത്തോടൊപ്പം കഴിക്കുന്നത് വയറുവേദന കുറയ്ക്കാൻ സഹായിക്കും.',
    kn: 'ಆಹಾರದೊಂದಿಗೆ ಅಥವಾ ಆಹಾರವಿಲ್ಲದೆ ತೆಗೆದುಕೊಳ್ಳಬಹುದು. ಊಟದೊಂದಿಗೆ ತೆಗೆದುಕೊಳ್ಳುವುದು ಹೊಟ್ಟೆಯ ತೊಂದರೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.'
  },
  'must be taken with food, milk, or an antacid to protect the stomach lining.': {
    ta: 'வயிற்றுப் படலத்தைப் பாதுகாக்க நிச்சயம் உணவு, பால் அல்லது என்டாசிட் உடன் எடுத்துக்கொள்ள வேண்டும்.',
    hi: 'पेट की परत की सुरक्षा के लिए इसे भोजन, दूध या एंटासिड के साथ ही लिया जाना चाहिए।',
    te: 'కడుపు పొరను రక్షించడానికి దీనిని ఖచ్చితంగా ఆహారం, పాలు లేదా యాంటాసిడ్‌తో తీసుకోవాలి.',
    ml: 'വയറിന് സംരക്ഷണം നൽകാൻ ഇത് ഭക്ഷണത്തോടൊപ്പമോ പാലുമായോ അന്റാസിഡുമായോ മാത്രം കഴിക്കുക.',
    kn: 'ಹೊಟ್ಟೆಯ ಪದರವನ್ನು ರಕ್ಷಿಸಲು ಇದನ್ನು ಆಹಾರ, ಹಾಲು ಅಥವಾ ಆಂಟಾಸಿಡ್‌ನೊಂದಿಗೆ ತೆಗೆದುಕೊಳ್ಳಬೇಕು.'
  },
  'take with a glass of water, ideally with or after food unless directed otherwise.': {
    ta: 'மருத்துவர் வழிகாட்டுதலின்படி ஒரு கிளாஸ் தண்ணீருடன் உணவுக்குப் பிறகு அல்லது உணவோடு எடுத்துக்கொள்ளவும்.',
    hi: 'चिकित्सक के निर्देशों के अनुसार एक गिलास पानी के साथ भोजन के बाद या भोजन के साथ लें।',
    te: 'వైద్యుడి సూచనల ప్రకారం గ్లాసు నీటితో భోజనం తర్వాత లేదా భోజనంతో తీసుకోండి.',
    ml: 'ഡോക്ടറുടെ നിർദ്ദേശപ്രകാരം ഒരു ഗ്ലാസ് വെള്ളത്തോടൊപ്പം ഭക്ഷണത്തിന് ശേഷമോ കഴിക്കുക.',
    kn: 'ವೈದ್ಯರ ಸೂಚನೆಯಂತೆ ಒಂದು ಲೋಟ ನೀರಿನೊಂದಿಗೆ ಊಟದ ನಂತರ ತೆಗೆದುಕೊಳ್ಳಿ.'
  },
  'take as instructed on product packaging or by your physician.': {
    ta: 'மருத்துவர் அல்லது பேக்கேஜிங் வழிகாட்டுதலின்படி எடுத்துக்கொள்ளவும்.',
    hi: 'उत्पाद की पैकेजिंग या अपने चिकित्सक द्वारा दिए गए निर्देशों के अनुसार लें।',
    te: 'ఉత్పత్తి ప్యాకేజింగ్ లేదా మీ వైద్యుడు సూచించిన విధంగా తీసుకోండి.',
    ml: 'ഉൽപ്പന്നത്തിന്റെ പാക്കറ്റിലോ ഡോക്ടറോ നൽകുന്ന നിർദ്ദേശങ്ങൾ പാലിക്കുക.',
    kn: 'ಉತ್ಪನ್ನದ ಪ್ಯಾಕೇಜಿಂಗ್ ಅಥವಾ ನಿಮ್ಮ ವೈದ್ಯರು ಸೂಚಿಸಿದಂತೆ ತೆಗೆದುಕೊಳ್ಳಿ.'
  },

  // Timing Guidance
  'as needed every 4 to 6 hours. maintain at least a 4-hour gap between consecutive doses.': {
    ta: 'தேவைக்கேற்ப 4 முதல் 6 மணி நேரத்திற்கு ஒருமுறை எடுக்கலாம். அடுத்தடுத்த அளவுகளுக்கு இடையே குறைந்தபட்சம் 4 மணிநேர இடைவெளியைப் பராமரிக்கவும்.',
    hi: 'आवश्यकतानुसार हर 4 से 6 घंटे में लें। लगातार खुराकों के बीच कम से कम 4 घंटे का अंतर रखें।',
    te: 'అవసరాన్ని బట్టి ప్రతి 4 నుండి 6 గంటలకు తీసుకోవచ్చు. మోతాదుల మధ్య కనీసం 4 గంటల విరామం ఉంచండి.',
    ml: 'ആവശ്യാനുസരണം 4 മുതൽ 6 മണിക്കൂർ ഇടവിട്ട് കഴിക്കാം. അടുത്ത ഡോസുകൾക്കിടയിൽ കുറഞ്ഞത് 4 മണിക്കൂർ ഇടവേള നൽകുക.',
    kn: 'ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ 4 ರಿಂದ 6 ಗಂಟೆಗಳಿಗೊಮ್ಮೆ ತೆಗೆದುಕೊಳ್ಳಬಹುದು. ಪ್ರಮಾಣಗಳ ನಡುವೆ ಕನಿಷ್ಠ 4 ಗಂಟೆಗಳ ಅಂತರವಿರಲಿ.'
  },
  'best taken in the evening or at night as it may cause mild drowsiness in some individuals.': {
    ta: 'சிலருக்கு லேசான தூக்கத்தை ஏற்படுத்தக்கூடும் என்பதால் மாலை அல்லது இரவில் எடுப்பது சிறந்தது.',
    hi: 'इसे शाम या रात में लेना सबसे अच्छा है क्योंकि इससे कुछ लोगों में हल्की नींद आ सकती है।',
    te: 'కొందరిలో ఇది తేలికపాటి నిద్రమత్తును కలిగిస్తుంది కాబట్టి సాయంత్రం లేదా రాత్రి వేళల్లో తీసుకోవడం మంచిది.',
    ml: 'ചിലരിൽ ചെറിയ ഉറക്കം വരാൻ സാധ്യതയുള്ളതിനാൽ വൈകുന്നേരമോ രാത്രിയിലോ കഴിക്കുന്നതാണ് ഉചിതം.',
    kn: 'ಕೆಲವರಲ್ಲಿ ಸಾಧಾರಣ ನಿದ್ರೆ ತರಬಹುದು என்பதால் ಸಂಜೆ ಅಥವಾ ರಾತ್ರಿ ತೆಗೆದುಕೊಳ್ಳುವುದು ಉತ್ತಮ.'
  },
  'morning, afternoon, and night (every 8 hours) or morning and evening (every 12 hours) at evenly spaced intervals.': {
    ta: 'காலை, மதியம், இரவு (எட்டு மணி நேரத்திற்கு ஒருமுறை) அல்லது காலை, மாலை (12 மணி நேரத்திற்கு ஒருமுறை) சமமான இடைவெளியில் எடுக்கவும்.',
    hi: 'सुबह, दोपहर और रात (हर 8 घंटे) या सुबह और शाम (हर 12 घंटे) समान अंतराल पर लें।',
    te: 'ఉదయం, మధ్యాహ్నం, రాత్రి (ప్రతి 8 గంటలకు) లేదా ఉదయం, సాయంత్రం (ప్రతి 12 గంటలకు) సమానమైన విరామాలలో తీసుకోండి.',
    ml: 'രാവിലെ, ഉച്ചയ്ക്ക്, രാത്രി (8 മണിക്കൂർ ഇടവിട്ട്) അല്ലെങ്കിൽ രാവിലെയും വൈകുന്നേരവും (12 മണിക്കൂർ ഇടവിട്ട്) കഴിക്കുക.',
    kn: 'ಬೆಳಿಗ್ಗೆ, ಮಧ್ಯಾಹ್ನ, ರಾತ್ರಿ (ಪ್ರತಿ 8 ಗಂಟೆಗೆ) ಅಥವಾ ಬೆಳಿಗ್ಗೆ ಮತ್ತು ಸಂಜೆ (ಪ್ರತಿ 12 ಗಂಟೆಗೆ) ತೆಗೆದುಕೊಳ್ಳಿ.'
  },
  'take after meals. maintain a 4 to 6 hour gap between doses.': {
    ta: 'உணவுக்குப் பிறகு எடுக்கவும். அளவுகளுக்கு இடையே 4 முதல் 6 மணி நேர இடைவெளியைப் பராமரிக்கவும்.',
    hi: 'भोजन के बाद लें। खुराकों के बीच 4 से 6 घंटे का अंतर रखें।',
    te: 'భోజనం తర్వాత తీసుకోండి. మోతాదుల మధ్య 4 నుండి 6 గంటల విరామం ఉంచండి.',
    ml: 'ഭക്ഷണത്തിന് ശേഷം കഴിക്കുക. ഡോസുകൾക്കിടയിൽ 4 മുതൽ 6 മണിക്കൂർ ഇടവേള നൽകുക.',
    kn: 'ಊಟದ ನಂತರ ತೆಗೆದುಕೊಳ್ಳಿ. ಪ್ರಮಾಣಗಳ ನಡುವೆ 4 ರಿಂದ 6 ಗಂಟೆಗಳ ಅಂತರವಿರಲಿ.'
  },
  'as scheduled by your healthcare provider.': {
    ta: 'உங்கள் தகுதியான மருத்துவ நிபுணரின் நேர அட்டவணையின்படி எடுத்துக்கொள்ளவும்.',
    hi: 'अपने स्वास्थ्य सेवा प्रदाता द्वारा निर्धारित समय के अनुसार लें।',
    te: 'మీ వైద్యుడు లేదా ఆరోగ్య నిపుణుడు సూచించిన సమయ పట్టిక ప్రకారం తీసుకోండి.',
    ml: 'നിങ്ങളുടെ ഡോക്ടർ നിർദ്ദേശിച്ച സമയക്രമം അനുസരിച്ച് കഴിക്കുക.',
    kn: 'ನಿಮ್ಮ ವೈದ್ಯರು ಸೂಚಿಸಿದ ಸಮಯದಂತೆ ತೆಗೆದುಕೊಳ್ಳಿ.'
  },
  'as directed by a licensed physician.': {
    ta: 'உரிமம் பெற்ற மருத்துவ நிபுணரின் வழிகாட்டுதலின்படி எடுத்துக்கொள்ளவும்.',
    hi: 'चिकित्सक के निर्देशानुसार लें।',
    te: 'వైద్యుడి సూచనల ప్రకారం తీసుకోండి.',
    ml: 'ഡോക്ടറുടെ നിർദ്ദേശപ്രകാരം കഴിക്കുക.',
    kn: 'ವೈದ್ಯರ ಸೂಚನೆಯಂತೆ ತೆಗೆದುಕೊಳ್ಳಿ.'
  },

  // Drug Interactions
  'may interact with warfarin (blood thinners), alcohol, isoniazid, carbamazepine, and other hepatotoxic medications.': {
    ta: 'வாசிப்பரின் (இரத்தத்தை மெலிதாக்கும் மருந்துகள்), மதுபானம் மற்றும் பிற கல்லீரலைப் பாதிக்கும் மருந்துகளுடன் தொடர்புகொள்ளக்கூடும்.',
    hi: 'वारफारिन (रक्त पतला करने वाली दवाएं), शराब और अन्य लीवर को प्रभावित करने वाली दवाओं के साथ परस्पर क्रिया कर सकती है।',
    te: 'వార్ఫరిన్ (రక్తాన్ని పల్చబరిచే మందులు), ఆల్కహాల్ మరియు కాలేయాన్ని ప్రభావితం చేసే ఇతర మందులతో పరస్పర చర్య జరపవచ్చు.',
    ml: 'വാർഫറിൻ (രക്തം കട്ടപിടിക്കുന്നത് തടയുന്ന മരുന്നുകൾ), മദ്യം എന്നിവയുമായി പ്രതിപ്രവർത്തിക്കാം.',
    kn: 'ವಾರ್ಫರಿನ್ (ರಕ್ತ ತೆಳುವಾಗಿಸುವ ಔಷಧಿಗಳು), ಮದ್ಯಪಾನ ಮತ್ತು ಇತರ ಲಿವರ್‌ಗೆ ಹಾನಿಕರ ಔಷಧಿಗಳೊಂದಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸಬಹುದು.'
  },
  'central nervous system (cns) depressants, alcohol, sedatives, and tranquilizers.': {
    ta: 'நரம்பு மண்டலத்தை அமைதிப்படுத்தும் மருந்துகள், மதுபானம் மற்றும் தூக்க மருந்துகளுடன் தொடர்புகொள்ளக்கூடும்.',
    hi: 'केंद्रीय तंत्रिका तंत्र (CNS) को शांत करने वाली दवाएं, शराब और शामक दवाएं।',
    te: 'కేంద్ర నరాల వ్యవస్థపై పనిచేసే మందులు, ఆల్కహాల్ మరియు నిద్ర మందులతో పరస్పర చర్య జరపవచ్చు.',
    ml: 'നാഡീവ്യൂഹത്തെ ബാധിക്കുന്ന മരുന്നുകൾ, മദ്യം, ഉറക്കഗുളികകൾ എന്നിവയുമായി പ്രതിപ്രവർത്തിക്കാം.',
    kn: 'ನರಮಂಡಲದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುವ ಔಷಧಿಗಳು, ಮದ್ಯಪಾನ ಮತ್ತು ನಿದ್ರೆ ಮಾತ್ರೆಗಳು.'
  },
  'probenecid, blood thinners (warfarin), oral typhoid vaccines, and allopurinol.': {
    ta: 'ப்ரோபெனிசிட், இரத்த மெலிதாக்கிகள் (வாசிப்பரின்), வாய்வழி டைபாய்டு தடுப்பூசிகள் மற்றும் அலோபுரினோல் ஆகியவற்றுடன் தொடர்புகொள்ளக்கூடும்.',
    hi: 'प्रोबेनेसिड, रक्त पतला करने वाली दवाएं (वारफारिन), मौखिक टाइफाइड टीके और एलोप्यूरिनॉल।',
    te: 'ప్రోబెనెసిడ్, రక్తాన్ని పల్చబరిచే మందులు (వార్ఫరిన్) మరియు అల్లోపురినాల్‌తో పరస్పర చర్య జరపవచ్చు.',
    ml: 'പ്രൊബെനെസിഡ്, രക്തം കട്ടപിടിക്കുന്നത് തടയുന്ന മരുന്നുകൾ, ടൈഫോയ്ഡ് വാക്സിൻ എന്നിവയുമായി പ്രതിപ്രവർത്തിക്കാം.',
    kn: 'ಪ್ರೊಬೆನೆಸಿಡ್, ರಕ್ತ ತೆಳುವಾಗಿಸುವ ಔಷಧಿಗಳು (ವಾರ್ಫರಿನ್) ಮತ್ತು ಅಲ್ಲೋಪುರಿನಾಲ್.'
  },
  'aspirin, other nsaids, anticoagulants (blood thinners), ace inhibitors, diuretics, and lithium.': {
    ta: 'ஆஸ்பிரின், பிற அழற்சி எதிர்ப்பு மருந்துகள், இரத்த மெலிதாக்கிகள் மற்றும் லித்தியம் ஆகியவற்றுடன் தொடர்புகொள்ளக்கூடும்.',
    hi: 'एस्पिरिन, अन्य दर्द निवारक, रक्त पतला करने वाली दवाएं और लिथियम।',
    te: 'ఆస్పిరిన్, ఇతర నొప్పి నివారణలు, రక్తాన్ని పల్చబరిచే మందులు మరియు లిథియంతో పరస్పర చర్య జరపవచ్చు.',
    ml: 'ആസ്പിരിൻ, മറ്റ് വേദന സംഹാരികൾ, രക്തം കട്ടപിടിക്കുന്നത് തടയുന്ന മരുന്നുകൾ എന്നിവയുമായി പ്രതിപ്രവർത്തിക്കാം.',
    kn: 'ಆಸ್ಪಿರಿನ್, ಇತರ ನೋವು ನಿವಾರಕಗಳು, ರಕ್ತ ತೆಳುವಾಗಿಸುವ ಔಷಧಿಗಳು ಮತ್ತು ಲಿಥಿಯಂ.'
  },
  'information unavailable from the selected source for exact drug interactions. consult your doctor.': {
    ta: 'துல்லியமான மருந்து தொடர்புகளுக்கு உங்கள் மருத்துவரை அணுகவும்.',
    hi: 'सटीक दवा प्रतिक्रियाओं के लिए अपने डॉक्टर से सलाह लें।',
    te: 'ఖచ్చితమైన పరస్పర చర్యల కోసం మీ వైద్యుడిని సంప్రదించండి.',
    ml: 'മരുന്ന് വിവരങ്ങൾക്ക് ഡോക്ടറോട് ചോദിക്കുക.',
    kn: 'ನಿಖರ ಮಾಹಿತಿಗಾಗಿ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.'
  },
  'inform your doctor of all prescription and non-prescription medicines you are taking.': {
    ta: 'நீங்கள் உட்கொள்ளும் அனைத்து மருந்துகளையும் பற்றி உங்கள் மருத்துவரிடம் தெரிவிக்கவும்.',
    hi: 'अपनी ली जाने वाली सभी दवाओं के बारे में अपने डॉक्टर को सूचित करें।',
    te: 'మీరు తీసుకుంటున్న అన్ని మందుల గురించి మీ వైద్యుడికి తెలియజేయండి.',
    ml: 'നിങ്ങൾ കഴിക്കുന്ന എല്ലാ മരുന്നുകളെക്കുറിച്ചും ഡോക്ടറോട് പറയുക.',
    kn: 'ನೀವು ತೆಗೆದುಕೊಳ್ಳುವ ಎಲ್ಲಾ ಔಷಧಿಗಳ ಬಗ್ಗೆ ವೈದ್ಯರಿಗೆ ತಿಳಿಸಿ.'
  },

  // Side Effects
  'rare when taken as directed. possible mild side effects include nausea, stomach upset, or allergic skin rash. overdose can cause severe, life-threatening liver toxicity.': {
    ta: 'பரிந்துரைக்கப்பட்டபடி எடுக்கும்போது பக்கவிளைவுகள் அரிது. குமட்டல், வயிற்று அசௌகரியம் ஏற்படலாம். அதிக அளவு கல்லீரல் பாதிப்பை ஏற்படுத்தலாம்.',
    hi: 'निर्देशानुसार लेने पर दुष्प्रभाव दुर्लभ हैं। मतली या पेट खराब हो सकता है। अत्यधिक मात्रा लीवर को नुकसान पहुंचा सकती है।',
    te: 'సూచించిన విధంగా తీసుకుంటే దుష్ప్రభావాలు అరుదు. వికారం, కడుపు అసౌకర్యం కలగవచ్చు. అతిగా తీసుకుంటే కాలేయానికి ప్రమాదం.',
    ml: 'നിർദ്ദേശിച്ച അളവിൽ കഴിച്ചാൽ പാർശ്വഫലങ്ങൾ അപൂർവ്വമാണ്. വയറുവേദനയോ ഛർദ്ദിയോ വരാം. അളവ് കൂടിയാൽ കരളിനെ ബാധിക്കാം.',
    kn: 'ಸೂಚಿಸಿದಂತೆ ತೆಗೆದುಕೊಂಡರೆ ಅಡ್ಡಪರಿಣಾಮಗಳು ವಿರಳ. ವಾಕರಿಕೆ ಉಂಟಾಗಬಹುದು. ಅತಿಯಾದ ಪ್ರಮಾಣ ಲಿವರ್‌ಗೆ ಹಾನಿಕರ.'
  },
  'mild drowsiness, fatigue, dry mouth, headache, dizziness, or mild stomach discomfort.': {
    ta: 'லேசான தூக்கம், சோர்வு, வாய் வறட்சி, தலைவலி அல்லது மயக்கம் ஏற்படலாம்.',
    hi: 'हल्की नींद आना, थकान, मुंह सूखना, सिरदर्द या चक्कर आना।',
    te: 'తేలికపాటి నిద్రమత్తు, అలసట, నోరు ఎండిపోవడం లేదా తలనొప్పి.',
    ml: 'നേരിയ ഉറക്കം, ക്ഷീണം, വായ വരണ്ട് പോവുക, തലവേദന.',
    kn: 'ಸಾಧಾರಣ ನಿದ್ರೆ, ಆಯಾಸ, ಬಾಯಿ ಒಣಗುವುದು ಅಥವಾ ತಲೆನೋವು.'
  },
  'diarrhea, nausea, vomiting, stomach discomfort, headache, or mild skin rash. severe allergic reactions (anaphylaxis) require immediate emergency medical care.': {
    ta: 'வயிற்றுப்போக்கு, குமட்டல், வாந்தி, வயிற்று அசௌகரியம், தலைவலி அல்லது தோலில் அரிப்பு. கடுமையான ஒவ்வாமை ஏற்பட்டால் உடனடியாக மருத்துவ உதவியை நாடவும்.',
    hi: 'दस्त, मतली, उल्टी, पेट में परेशानी, सिरदर्द या त्वचा पर चकत्ते। गंभीर एलर्जी प्रतिक्रिया होने पर तुरंत चिकित्सा सहायता लें।',
    te: 'విరేచనాలు, వికారం, వాంతులు, కడుపు అసౌకర్యం, తలనొప్పి లేదా చర్మంపై దద్దుర్లు. తీవ్రమైన అలెర్జీ ఉంటే వెంటనే వైద్యుడిని సంప్రదించండి.',
    ml: 'വയറിളക്കം, ഛർദ്ദി, വയറുവേദന, തലവേദന അല്ലെങ്കിൽ ചൊറിച്ചിൽ. കഠിനമായ അലർജി ലക്ഷണങ്ങൾ കണ്ടാൽ ഉടൻ ഡോക്ടറെ സമീപിക്കുക.',
    kn: 'ಭೇದಿ, ವಾಕರಿಕೆ, ವಾಂತಿ, ಹೊಟ್ಟೆಯ ತೊಂದರೆ, ತಲೆನೋವು ಅಥವಾ ಚರ್ಮದ ದದ್ದು. ತೀವ್ರ ಅಲರ್ಜಿ ಲಕ್ಷಣಗಳಿದ್ದರೆ ತಕ್ಷಣ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.'
  },
  'stomach pain, heartburn, nausea, dizziness, bloating. prolonged use increases risk of gastrointestinal bleeding and cardiovascular events.': {
    ta: 'வயிற்று வலி, நெஞ்செரிச்சல், குமட்டல், தலைச்சுற்றல். நீண்ட கால பயன்பாடு வயிற்றுப்போக்கு மற்றும் இதய அபாயத்தை அதிகரிக்கும்.',
    hi: 'पेट दर्द, सीने में जलन, मतली, चक्कर आना। लंबे समय तक उपयोग से पेट में रक्तस्राव का खतरा बढ़ जाता है।',
    te: 'కడుపు నొప్పి, గుండెల్లో మంట, వికారం, తలతిరగడం. ఎక్కువ కాలం వాడితే కడుపులో రక్తస్రావం అయ్యే ప్రమాదం ఉంది.',
    ml: 'വയറുവേദന, നെഞ്ചെരിച്ചിൽ, ഛർദ്ദി, തലകറക്കം. ദീർഘകാല ഉപയോഗം വയറ്റിൽ രക്തസ്രാവത്തിന് കാരണമാകാം.',
    kn: 'ಹೊಟ್ಟೆ ನೋವು, ಎದೆ ಉರಿ, ವಾಕರಿಕೆ, ತಲೆತಿರುಗುವಿಕೆ. ದೀರ್ಘಕಾಲದ ಬಳಕೆ ಹೊಟ್ಟೆಯಲ್ಲಿ ರಕ್ತಸ್ರಾವದ ಅಪಾಯವನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ.'
  },
  'may cause mild stomach distress, headache, or fatigue. discontinue and seek medical help if adverse allergic reactions occur.': {
    ta: 'லேசான வயிற்று அசௌகரியம், தலைவலி அல்லது சோர்வு ஏற்படலாம். ஒவ்வாமை அறிகுறிகள் தென்பட்டால் உடனடியாக மருத்துவ உதவியை நாடவும்.',
    hi: 'हल्का पेट खराब, सिरदर्द या थकान हो सकती है। एलर्जी के लक्षण दिखने पर दवा बंद करें और डॉक्टर से संपर्क करें।',
    te: 'తేలికపాటి కడుపు అసౌకర్యం, తలనొప్పి లేదా అలసట కలగవచ్చు. అలెర్జీ లక్షణాలు కనిపిస్తే వెంటనే వైద్యుడిని సంప్రదించండి.',
    ml: 'വയറുവേദന, തലവേദന അല്ലെങ്കിൽ ക്ഷീണം വരാം. അലർജി കണ്ടാൽ മരുന്ന് നിർത്തി ഡോക്ടറെ കാണുക.',
    kn: 'ಸಾಧಾರಣ ಹೊಟ್ಟೆಯ ಕಿರಿಕಿರಿ, ತಲೆನೋವು ಅಥವಾ ಆಯಾಸ ಉಂಟಾಗಬಹುದು. ಅಲರ್ಜಿ ಲಕ್ಷಣಗಳಿದ್ದರೆ ತಕ್ಷಣ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.'
  },
  'possible mild nausea or allergic reaction. consult your doctor if unexpected symptoms develop.': {
    ta: 'லேசான குமட்டல் அல்லது ஒவ்வாமை எதிர்வினை ஏற்படலாம். எதிர்பாராத அறிகுறிகள் தோன்றினால் மருத்துவரை அணுகவும்.',
    hi: 'हल्की मतली या एलर्जी की प्रतिक्रिया संभव है। अप्रत्याशित लक्षण विकसित होने पर अपने डॉक्टर से सलाह लें।',
    te: 'తేలికపాటి వికారం లేదా అలెర్జీ చర్య రావచ్చు. ఊహించని లక్షణాలు కనిపిస్తే వైద్యుడిని సంప్రదించండి.',
    ml: 'ചെറിയ ഛർദ്ദിയോ അലർജിയോ വരാം. അസ്വാഭാവിക ലക്ഷണങ്ങൾ കണ്ടാൽ ഡോക്ടറെ കാണുക.',
    kn: 'ಸಾಧಾರಣ ವಾಕರಿಕೆ ಅಥವಾ ಅಲರ್ಜಿ ಉಂಟಾಗಬಹುದು. ತೊಂದರೆ ಇದ್ದರೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.'
  },

  // Precautions
  'do not take with other products containing paracetamol/acetaminophen. avoid alcohol consumption during treatment. consult a doctor before use if you have chronic liver or kidney disease.': {
    ta: 'பாராசிட்டமால் உள்ள பிற மருந்துகளுடன் சேர்த்து எடுக்க வேண்டாம். சிகிச்சையின் போது மது அருந்துவதைத் தவிர்க்கவும். கல்லீரல் அல்லது சிறுநீரக நோய் இருந்தால் மருத்துவரை அணுகவும்.',
    hi: 'पैरासिटामोल युक्त अन्य दवाओं के साथ न लें। इलाज के दौरान शराब से बचें। लीवर या किडनी की बीमारी होने पर डॉक्टर से सलाह लें।',
    te: 'పారాసిటమాల్ ఉన్న ఇతర మందులతో తీసుకోకండి. మద్యం సేవించకూడదు. కాలేయం లేదా మూత్రపిండాల సమస్య ఉంటే వైద్యుడిని సంప్రదించండి.',
    ml: 'പാരസെറ്റമോൾ അടങ്ങിയ മറ്റ് മരുന്നുകളോടൊപ്പം കഴിക്കരുത്. മദ്യം ഒഴിവാക്കുക. കരൾ അല്ലെങ്കിൽ വൃക്ക രോഗമുണ്ടെങ്കിൽ ഡോക്ടറോട് ചോദിക്കുക.',
    kn: 'ಪ್ಯಾರಸಿಟಮಾಲ್ ಇರುವ ಇತರ ಔಷಧಿಗಳೊಂದಿಗೆ ತೆಗೆದುಕೊಳ್ಳಬೇಡಿ. ಮದ್ಯಪಾನ ಮಾಡಬೇಡಿ. ಲಿವರ್ ಅಥವಾ ಕಿಡ್ನಿ ತೊಂದರೆ ಇದ್ದರೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.'
  },
  'use caution when operating machinery or driving until you know how this medication affects you. avoid alcohol as it increases drowsiness.': {
    ta: 'வாகனம் ஓட்டும்போது எச்சரிக்கையாக இருக்கவும். மது அருந்துவதைத் தவிர்க்கவும், ஏனெனில் இது தூக்கத்தை அதிகரிக்கும்.',
    hi: 'वाहन चलाते समय या मशीनरी चलाते समय सावधानी बरतें। शराब से बचें क्योंकि यह उनींदापन बढ़ाती है।',
    te: 'డ్రైవింగ్ చేసేటప్పుడు జాగ్రత్తగా ఉండండి. ఆల్కహాల్ నిద్రమత్తును పెంచుతుంది కాబట్టి దానిని నివారించండి.',
    ml: 'വാഹനം ഓടിക്കുമ്പോൾ ശ്രദ്ധിക്കുക. മദ്യം ഒഴിവാക്കുക, ഇത് ഉറക്കം കൂട്ടും.',
    kn: 'ವಾಹನ ಚಾಲನೆ ಮಾಡುವಾಗ ಎಚ್ಚರವಿರಲಿ. ಮದ್ಯಪಾನವನ್ನು ತಪ್ಪಿಸಿ.'
  },
  'do not use if you have a known history of penicillin or cephalosporin allergy. report persistent diarrhea or severe skin rash immediately.': {
    ta: 'பெனிசிலின் ஒவ்வாமை வரலாறு இருந்தால் பயன்படுத்த வேண்டாம். தொடர்ச்சியான வயிற்றுப்போக்கு அல்லது அரிப்பு இருந்தால் மருத்துவரிடம் தெரிவிக்கவும்.',
    hi: 'यदि आपको पेनिसिलिन से एलर्जी है तो उपयोग न करें। लगातार दस्त होने पर तुरंत डॉक्टर को सूचित करें।',
    te: 'పెన్సిలిన్ అలెర్జీ ఉన్నవారు ఉపయోగించకూడదు. విరేచనాలు తగ్గేవరకు వైద్యుడికి తెలియజేయండి.',
    ml: 'പെൻസിലിൻ അലർജിയുള്ളവർ കഴിക്കരുത്. വയറിളക്കം മാറിയില്ലെങ്കിൽ ഡോക്ടറോട് പറയുക.',
    kn: 'ಪೆನಿಸಿಲಿನ್ ಅಲರ್ಜಿ ಇದ್ದರೆ ಬಳಸಬೇಡಿ. ಭೇದಿ ನಿಲ್ಲದಿದ್ದರೆ ವೈದ್ಯರಿಗೆ ತಿಳಿಸಿ.'
  },
  'avoid if you have stomach ulcers, kidney impairment, severe heart failure, or asthma triggered by aspirin/nsaids.': {
    ta: 'வயிற்றுப் புண், சிறுநீரகக் கோளாறு அல்லது ஆஸ்துமா இருந்தால் இந்த மருந்தைத் தவிர்க்கவும்.',
    hi: 'यदि आपको पेट में अल्सर, किडनी की समस्या या अस्थमा है तो इससे बचें।',
    te: 'కడుపులో పుండ్లు, మూత్రపిండాల సమస్యలు లేదా ఆస్తమా ఉంటే దీనిని నివారించండి.',
    ml: 'അൾസർ, വൃക്കരോഗം അല്ലെങ്കിൽ ആസ്ത്മ ഉള്ളവർ ഈ മരുന്ന് ഒഴിവാക്കുക.',
    kn: 'ಹೊಟ್ಟೆಯ ಹುಣ್ಣು, ಕಿಡ್ನಿ ತೊಂದರೆ ಅಥವಾ ಆಸ್ತಮಾ ಇದ್ದರೆ ಇದನ್ನು ತಪ್ಪಿಸಿ.'
  },
  'keep out of reach of children. do not share prescription medications.': {
    ta: 'குழந்தைகளுக்கு எட்டாத இடத்தில் வைக்கவும். பிறருடன் மருந்தை பகிர்ந்து கொள்ள வேண்டாம்.',
    hi: 'बच्चों की पहुंच से दूर रखें। दूसरों के साथ दवा साझा न करें।',
    te: 'పిల్లలకు దూరంగా ఉంచండి. ఇతరులతో పంచుకోవద్దు.',
    ml: 'കുട്ടികൾക്ക് എട്ടാത്ത സ്ഥലത്ത് സൂക്ഷിക്കുക. മരുന്നുകൾ മറ്റുള്ളവർക്ക് നൽകരുത്.',
    kn: 'ಮಕ್ಕಳಿಗೆ ಸಿಗದಂತೆ ಇಡಿ. ಇತರರಿಗೆ ನೀಡಬೇಡಿ.'
  },
  'consult a healthcare provider before starting treatment.': {
    ta: 'சிகிச்சையைத் தொடங்குவதற்கு முன் தகுதியான மருத்துவரை அணுகவும்.',
    hi: 'इलाज शुरू करने से पहले डॉक्टर से सलाह लें।',
    te: 'చికిత్స ప్రారంభించే ముందు వైద్యుడిని సంప్రదించండి.',
    ml: 'ചികിത്സ തുടങ്ങുന്നതിന് മുൻപ് ഡോക്ടറോട് ചോദിക്കുക.',
    kn: 'ಚಿಕಿತ್ಸೆ ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.'
  },

  // Storage
  'store at room temperature below 30°c (86°f), away from direct light, heat, and moisture.': {
    ta: 'நேரடி ஒளி, வெப்பம் மற்றும் ஈரப்பதம் இல்லாத இடங்களில் 30°C க்கும் குறைவான அறை வெப்பநிலையில் சேமிக்கவும்.',
    hi: 'सीधी धूप, गर्मी और नमी से दूर 30°C से कम कमरे के तापमान पर स्टोर करें।',
    te: 'నేరుగా వెలుతురు, వేడి మరియు తేమ తగలకుండా 30°C కంటే తక్కువ ఉష్ణోగ్రత వద్ద నిల్వ చేయండి.',
    ml: 'വെളിച്ചം, ചൂട്, ഈർപ്പം എന്നിവ തട്ടാതെ 30°C ന് താഴെ സാധാരണ ഊഷ്മാവിൽ സൂക്ഷിക്കുക.',
    kn: 'ನೇರ ಬೆಳಕು, ಶಾಖ ಮತ್ತು ತೇವಾಂಶದಿಂದ ದೂರವಾಗಿ 30°C ಗಿಂತ ಕಡಿಮೆ ತಾಪಮಾನದಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ.'
  },
  'store between 20°c to 25°c (68°f to 77°f). protect from excessive heat and moisture.': {
    ta: '20°C முதல் 25°C வரையிலான வெப்பநிலையில் சேமிக்கவும். அதிக வெப்பம் மற்றும் ஈரப்பதத்திலிருந்து பாதுகாக்கவும்.',
    hi: '20°C से 25°C के बीच स्टोर करें। अत्यधिक गर्मी और नमी से बचाएं।',
    te: '20°C నుండి 25°C మధ్య నిల్వ చేయండి. అధిక వేడి మరియు తేమ నుండి రక్షించండి.',
    ml: '20°C മുതൽ 25°C വരെ താപനിലയിൽ സൂക്ഷിക്കുക. അമിത ചൂടിൽ നിന്നും ഈർപ്പത്തിൽ നിന്നും സംരക്ഷിക്കുക.',
    kn: '20°C ಯಿಂದ 25°C ನಡುವೆ ಸಂಗ್ರಹಿಸಿ. ಅತಿಯಾದ ಶಾಖ ಮತ್ತು ತೇವಾಂಶದಿಂದ ರಕ್ಷಿಸಿ.'
  },
  'store solid capsules at room temperature (20°c - 25°c). reconstitution liquid suspensions require refrigeration (2°c - 8°c).': {
    ta: 'காப்ஸ்யூல்களை அறை வெப்பநிலையில் சேமிக்கவும் (20°C-25°C). திரவ மருந்துகளைக் குளிர்பதனப் பெட்டியில் (2°C-8°C) வைக்க வேண்டும்.',
    hi: 'कैप्सूल को कमरे के तापमान (20°C-25°C) पर स्टोर करें। तरल सिरप को फ्रिज में (2°C-8°C) रखना चाहिए।',
    te: 'క్యాప్సూల్స్‌ను సాధారణ ఉష్ణోగ్రత (20°C-25°C) వద్ద నిల్వ చేయండి. ద్రవ రూపంలో ఉన్న మందులను ఫ్రిజ్‌లో (2°C-8°C) ఉంచాలి.',
    ml: 'ക്യാപ്സ്യൂളുകൾ സാധാരണ ഊഷ്മാവിൽ സൂക്ഷിക്കുക. ദ്രാവക രൂപത്തിലുള്ള മരുന്നുകൾ ഫ്രിഡ്ജിൽ (2°C-8°C) വെക്കണം.',
    kn: 'ಕ್ಯಾಪ್ಸುಲ್ಗಳನ್ನು ಸಾಮಾನ್ಯ ತಾಪಮಾನದಲ್ಲಿ (20°C-25°C) ಸಂಗ್ರಹಿಸಿ. ದ್ರವ ಮದ್ದನ್ನು ಫ್ರಿಡ್ಜ್‌ನಲ್ಲಿ (2°C-8°C) ಇಡಬೇಕು.'
  },
  'store at 15°c to 30°c (59°f to 86°f). avoid excessive heat.': {
    ta: '15°C முதல் 30°C வரையிலான வெப்பநிலையில் சேமிக்கவும். அதிக வெப்பத்தைத் தவிர்க்கவும்.',
    hi: '15°C से 30°C पर स्टोर करें। अत्यधिक गर्मी से बचाएं।',
    te: '15°C నుండి 30°C వద్ద నిల్వ చేయండి. అధిక వేడిని నివారించండి.',
    ml: '15°C മുതൽ 30°C വരെ സൂക്ഷിക്കുക. അമിത ചൂട് ഒഴിവാക്കുക.',
    kn: '15°C ಯಿಂದ 30°C ತಾಪಮಾನದಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ. ಅತಿಯಾದ ಶಾಖದಿಂದ ರಕ್ಷಿಸಿ.'
  },
  'store at controlled room temperature below 30°c in a dry place.': {
    ta: 'உலர் இடத்தில் 30°C க்கும் குறைவான அறை வெப்பநிலையில் சேமிக்கவும்.',
    hi: '30°C से कम नियंत्रित कमरे के तापमान पर सूखे स्थान पर स्टोर करें।',
    te: 'పొడి ప్రదేశంలో 30°C కంటే తక్కువ ఉష్ణోగ్రత వద్ద నిల్వ చేయండి.',
    ml: 'ഉണങ്ങിയ സ്ഥലത്ത് 30°C യിൽ താഴെ സാധാരണ ഊഷ്മാവിൽ സൂക്ഷിക്കുക.',
    kn: 'ಒಣ ಜಾಗದಲ್ಲಿ 30°C ಗಿಂತ ಕಡಿಮೆ ತಾಪಮಾನದಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ.'
  },
  'store at room temperature in a dry place away from direct sunlight.': {
    ta: 'நேரடி சூரிய ஒளி படாதவாறு உலர் இடத்தில் அறை வெப்பநிலையில் சேமிக்கவும்.',
    hi: 'सीधी धूप से दूर सूखे स्थान पर कमरे के तापमान पर स्टोर करें।',
    te: 'నేరుగా సూర్యరశ్మి తగలకుండా పొడి ప్రదేశంలో నిల్వ చేయండి.',
    ml: 'നേരിട്ടുള്ള സൂര്യപ്രകാശം തട്ടാതെ ഉണങ്ങിയ സ്ഥലത്ത് സൂക്ഷിക്കുക.',
    kn: 'ನೇರ ಸೂರ್ಯನ ಬೆಳಕಿನಿಂದ ದೂರವಾಗಿ ಒಣ ಜಾಗದಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ.'
  }
};

/**
 * Universal Sentence/Phrase Medical Translator
 * Translates paragraphs by matching exact phrases, sub-sentences, or dynamic templates.
 */
export function getLocalizedDynamicText(text, lang = 'en') {
  if (!text || lang === 'en') return text;
  
  const rawText = String(text).trim();
  const cleanKey = rawText.toLowerCase();

  // 1. Direct exact dictionary match
  if (MEDICAL_FIELD_TRANSLATIONS[cleanKey] && MEDICAL_FIELD_TRANSLATIONS[cleanKey][lang]) {
    return MEDICAL_FIELD_TRANSLATIONS[cleanKey][lang];
  }

  // 2. Partial dictionary match for contained full sentences
  for (const dictKey of Object.keys(MEDICAL_FIELD_TRANSLATIONS)) {
    if (cleanKey === dictKey || cleanKey.includes(dictKey) || dictKey.includes(cleanKey)) {
      if (MEDICAL_FIELD_TRANSLATIONS[dictKey][lang]) {
        return MEDICAL_FIELD_TRANSLATIONS[dictKey][lang];
      }
    }
  }

  // 3. Dynamic Template Translations (e.g., "Therapeutic indication for X...")
  if (cleanKey.includes('therapeutic indication for')) {
    const medName = rawText.replace(/Therapeutic indication for /i, '').replace(/\..*/, '').trim();
    const templates = {
      ta: `${medName} க்கான மருத்துவ சிகிச்சை. தகுதியான மருத்துவ நிபுணரின் வழிகாட்டுதலின்படி பயன்படுத்தவும்.`,
      hi: `${medName} के लिए चिकित्सीय संकेत। योग्य चिकित्सा पेशेवर के निर्देशानुसार उपयोग करें।`,
      te: `${medName} కోసం వైద్య చికిత్స. అర్హత కలిగిన వైద్య నిపుణుడి సూచనల ప్రకారం ఉపయోగించండి.`,
      ml: `${medName} നുള്ള മെഡിക്കൽ ചികിത്സ. യോഗ്യതയുള്ള ഡോക്ടറുടെ നിർദ്ദേശപ്രകാരം ഉപയോഗിക്കുക.`,
      kn: `${medName} ಗಾಗಿ ವೈದ್ಯಕೀಯ ಚಿಕಿತ್ಸೆ. ಅರ್ಹ ವೈದ್ಯಕೀಯ ತಜ್ಞರ ಮಾರ್ಗದರ್ಶನದಂತೆ ಬಳಸಿ.`
    };
    if (templates[lang]) return templates[lang];
  }

  if (cleanKey.includes('typical dosage information from referenced source')) {
    const templates = {
      ta: 'குறிப்பிடப்பட்ட ஆதாரத்திலிருந்து வழக்கமான அளவு விவரம்: உங்கள் மருத்துவர் அல்லது மருந்தாளுனர் வழங்கிய துல்லியமான மருந்துச் சீட்டு வழிமுறைகளைப் பின்பற்றவும்.',
      hi: 'संदर्भित स्रोत से सामान्य खुराक की जानकारी: अपने डॉक्टर या फार्मासिस्ट द्वारा दिए गए सटीक नुस्खे के निर्देशों का पालन करें।',
      te: 'సూచించబడిన మూలం నుండి సాధారణ మోతాదు సమాచారం: మీ వైద్యుడు లేదా ఫార్మాసిస్ట్ అందించిన ప్రిస్క్రిప్షన్ సూచనలను పాటించండి.',
      ml: 'റഫറൻസ് ഉറവിടത്തിൽ നിന്നുള്ള സാധാരണ അളവ് വിവരം: നിങ്ങളുടെ ഡോക്ടറോ ഫാർമസിസ്റ്റോ നൽകുന്ന നിർദ്ദേശങ്ങൾ കൃത്യമായി പാലിക്കുക.',
      kn: 'ಉಲ್ಲೇಖಿತ ಮೂಲದಿಂದ ಸಾಮಾನ್ಯ ಪ್ರಮಾಣದ ಮಾಹಿತಿ: ನಿಮ್ಮ ವೈದ್ಯರು ಅಥವಾ ಫಾರ್ಮಸಿಸ್ಟ್ ನೀಡಿದ ಸೂಚನೆಗಳನ್ನು ಪಾಲಿಸಿ.'
    };
    if (templates[lang]) return templates[lang];
  }

  if (cleanKey.includes('commonly indicated for') || cleanKey.includes('therapeutic treatment')) {
    const templates = {
      ta: 'தகுதியான மருத்துவ நிபுணரின் வழிகாட்டுதலின்படி பயன்படுத்தப்படும் மருத்துவ சிகிச்சை.',
      hi: 'योग्य चिकित्सा पेशेवर के निर्देशानुसार उपयोग की जाने वाली चिकित्सीय दवा।',
      te: 'అర్హత కలిగిన వైద్య నిపుణుడి సూచనల ప్రకారం ఉపయోగించే వైద్య చికిత్స.',
      ml: 'ഡോക്ടറുടെ നിർദ്ദേശപ്രകാരം ഉപയോഗിക്കേണ്ട മെഡിക്കൽ ചികിത്സ.',
      kn: 'ಅರ್ಹ ವೈದ್ಯಕೀಯ ತಜ್ಞರ ಮಾರ್ಗದರ್ಶನದಂತೆ ಬಳಸಲಾಗುವ ವೈದ್ಯಕೀಯ ಚಿಕಿತ್ಸೆ.'
    };
    if (templates[lang]) return templates[lang];
  }

  if (cleanKey.includes('possible mild nausea') || cleanKey.includes('adverse reactions')) {
    const templates = {
      ta: 'லேசான குமட்டல் அல்லது ஒவ்வாமை எதிர்வினை ஏற்படலாம். எதிர்பாராத அறிகுறிகள் தோன்றினால் மருத்துவரை அணுகவும்.',
      hi: 'हल्की मतली या एलर्जी की प्रतिक्रिया संभव है। अप्रत्याशित लक्षण विकसित होने पर अपने डॉक्टर से सलाह लें।',
      te: 'తేలికపాటి వికారం లేదా అలెర్జీ చర్య రావచ్చు. ఊహించని లక్షణాలు కనిపిస్తే వైద్యుడిని సంప్రదించండి.',
      ml: 'ചെറിയ ഛർദ്ദിയോ അലർജിയോ വരാം. അസ്വാഭാവിക ലക്ഷണങ്ങൾ കണ്ടാൽ ഡോക്ടറെ കാണുക.',
      kn: 'ಸಾಧಾರಣ ವಾಕರಿಕೆ ಅಥವಾ ಅಲರ್ಜಿ ಉಂಟಾಗಬಹುದು. ತೊಂದರೆ ಇದ್ದರೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.'
    };
    if (templates[lang]) return templates[lang];
  }

  if (cleanKey.includes('consult a healthcare provider') || cleanKey.includes('warnings')) {
    const templates = {
      ta: 'சிகிச்சையைத் தொடங்குவதற்கு முன் தகுதியான மருத்துவரை அணுகவும்.',
      hi: 'इलाज शुरू करने से पहले डॉक्टर से सलाह लें।',
      te: 'చికిత్స ప్రారంభించే ముందు వైద్యుడిని సంప్రదించండి.',
      ml: 'ചികിത്സ തുടങ്ങുന്നതിന് മുൻപ് ഡോക്ടറോട് ചോദിക്കുക.',
      kn: 'ಚಿಕಿತ್ಸೆ ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.'
    };
    if (templates[lang]) return templates[lang];
  }

  if (cleanKey.includes('inform your doctor of all prescription') || cleanKey.includes('drug interactions')) {
    const templates = {
      ta: 'நீங்கள் உட்கொள்ளும் அனைத்து மருந்துகளையும் பற்றி உங்கள் மருத்துவரிடம் தெரிவிக்கவும்.',
      hi: 'अपनी ली जाने वाली सभी दवाओं के बारे में अपने डॉक्टर को सूचित करें।',
      te: 'మీరు తీసుకుంటున్న అన్ని మందుల గురించి మీ వైద్యుడికి తెలియజేయండి.',
      ml: 'നിങ്ങൾ കഴിക്കുന്ന എല്ലാ മരുന്നുകളെക്കുറിച്ചും ഡോക്ടറോട് പറയുക.',
      kn: 'ನೀವು ತೆಗೆದುಕೊಳ್ಳುವ ಎಲ್ಲಾ ಔಷಧಿಗಳ ಬಗ್ಗೆ ವೈದ್ಯರಿಗೆ ತಿಳಿಸಿ.'
    };
    if (templates[lang]) return templates[lang];
  }

  // 4. Tokenize by sentences for long compound paragraphs
  const sentences = rawText.split(/(?<=[.!?])\s+/);
  if (sentences.length > 1) {
    const translatedSentences = sentences.map(s => getLocalizedDynamicText(s, lang));
    return translatedSentences.join(' ');
  }

  return rawText;
}
