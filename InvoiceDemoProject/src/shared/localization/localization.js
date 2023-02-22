import {initializeRTL} from 'react-native-easy-localization-and-rtl';
import LocalizedStrings from 'react-native-localization';

const localizedString = new LocalizedStrings({
  en: {
    welcome: 'Welcome to',
    signIn: 'Sign In',
    premiumProperties: 'Premium Properties',
    premiumMotors: 'Premium Motors',
    searchLocation: 'Search Location',
    search: 'Search',
    //getStartPlaceholder: 'GET STARTED',
    signInPlaceholder: 'Login',
    forgetPasswordPlaceholder: 'Forget Password',
    newpassword: 'New Password',
    //proceedHolder: 'Proceed',
    //signInButtonPlaceholder: 'Sign In',
    proceedText: 'Proceed',
    emailphoneInput: 'Email',
    //emailpasswordInput: 'Email Address',
    passwordInput: 'Password',
    signIndonthaveAccount: "Don't Have An Account?",
    forgotPassword: ' FORGET PASSWORD',
    asaGuest: 'Continue as Guest',
    signUpText: 'Sign Up',
    nameInput: 'Name',
    emailInpit: 'Email',
    phoneInput: 'Phone',
    confirm: 'Confirm',
    residential: 'Residential',
    commercial: 'Commercial',
    confirmpasswordInput: 'Confirm Password',
    signUpAlreadyAccount: 'Already Have An Account?',
    verfication: 'Verification',
    verificationheading: 'A verification code was sent to your number',
    codetext: 'Code',
    homeText: 'Home',
    resendCode: 'Resend Code',
    rentText: 'Properties for Rent',
    saleText: 'Properties for Sale',
    motorText: 'Motors For Sale',
    perfecthomeText: 'Find your Perfect Home',
    perfectmotorText: 'Find your Perfect Motor',
    featuredmotorText: 'Discover Our Featured Motors',
    featuredpropertyText: 'Discover Our Featured Properties',
    blogText: 'Our News Feed',
    readmoreText: 'Read More',
    trendingpropertyText: 'Trending Properties',
    trendingcarText: 'Trending Motors',
    alertsText: 'Alerts',
    newsfeedText: 'News Feeds',
    newsText: 'News Details',
    settingText: 'Settings',
    accountinfoText: 'Account Info',
    wishlistText: 'My Wishlist',
    myrequestsText: 'My Requests',
    notificationsText: 'Alerts',
    changepassword: 'Change Password',
    helpText: 'Help',
    logouttext: 'Logout',
    wishlistText: 'My Wishlist',
    wishlistpropertyText: 'Saved Properties',
    wishlistmotorText: 'Saved Motors',
    aboutUs: 'About Us',
    termcondidtionText: 'Terms & Conditions',
    privacypolicyText: 'Privacy Policy',
    faqText: 'FAQs (Frequently Asked Questions)',
    customerText: 'Customer Support',
    faqTextt: 'FAQs',
    contactText: 'Contact Us',
    contactOnWhatsapp: 'Contact On Whatsapp',
    feedbackText: 'Feedback',
    meesageText: 'Message',
    getintouchText: 'Get in touch',
    sendusFeedbackText: 'Send us feedback from your experience on our App',
    deatilfeedbackText:
      'Your feedback is very important to us. Share your experience on our App and help us improve even more.',
    typeherePlaceholder: 'Enter description here',
    sendText: 'Submit',
    trendText: 'TRENDS',
    trendHeading: 'Everyone dreams of an Audi. Get one Today!',
    trendHHeading: 'Everyone dreams of an House. Get one Today!',
    aed: 'AED',
    exploreHeading: 'Explore',
    descriptionText: 'Description',
    propertyDeatils: 'Property Details',
    motorDeatils: 'Motor Details',
    PropertyReference: 'Property Reference',
    MotorReference: 'Motor Reference',
    bedroomsText: 'Bedrooms',
    diningText: 'Number of Dinning',
    laundryText: 'Number of Laundry',

    makeText: 'Make',
    bathroomsText: 'Bathrooms',
    modelText: 'Model',
    garageText: 'Garage',
    yearText: 'Build Year',
    rentproceText: 'Rent (Yearly)',
    propertyAdsdate: 'Property Ads date',
    carAdsdate: 'Car Ads date',
    propertylastupdate: 'Property update date',
    carlastupdate: 'Car update date',
    properystatusText: 'Propery Status',
    capacityText: 'Capacity',
    priceText: 'Price',
    keyword: 'Keyword',
    enterkeyword: 'Enter relevant Keywords',
    agent: 'Agent/Agency',
    conditionText: 'Body Condition',
    propertysizeText: 'PropertySize',
    kmDriven: 'Kilometers Driven',
    yearBuildText: 'Year Build',
    warrantyText: 'Warranty',
    fuelTypeText: 'Fuel Type',
    steeringSideText: 'SteeringSide',
    //garagesText: 'Garages',

    horsePowerText: 'HorsePower',
    videoText: 'Video',
    locationText: 'Location',
    floorPlansText: 'Floor Plans',
    chart1heading: 'Price Trend',
    chart2heading: 'Average Annual Rent',
    chart1:
      'View the listing price and transaction price trends of similar properties.',
    floorText: ' Floor',
    PropertyDocument: 'Property Document',
    PropertyDocumentdeatils:
      'View the listing price and transaction price trends of similar properties.',
    size: 'Size',
    kDriven: 'Kilometers Driven',
    buildYear: 'Build Year',
    roomText: 'Rooms',
    bathtext: 'Baths',
    contactSellerText: 'Contact Seller',
    homePlaceholder: 'What you are looking for',
    propertyFeaturedText: 'Featured Listing for',
    rentText: 'Properties for Rent',
    salesText: 'Properties for Sale',
    //motorText: 'Motors for Sale',
    exploreCititesText: 'Explore Cities',
    propertyRecentText: 'Recently Published for',
    propertyListText: 'Properties List',
    propertysearchPlaceholder: 'Find your perfect home',
    carListText: 'Motors List',
    carsearchPlaceholder: 'Find your perfect motor',
    filterText: 'Filter',
    clearAllText: 'Reset',
    sortByText: 'Sort By',
    sortPlaceholder: 'Select price order',
    carMakeText: 'Car Make',
    carbodyText: 'Car Body Type',
    carmodelText: 'Car Model',
    //cartransmissionText: 'Car Transmission',
    transmissionText: 'Transmission',
    cityText: 'City',
    gearsText: 'Gears',
    wheelsText: 'Wheels',
    mileageText: 'Mileage',
    categoriesText: 'Categories',
    featuresText: 'Features',
    bodyTypeText: 'Body Type',
    bathText: 'Baths',
    bedText: 'Bed',
    sqftText: 'Sq Ft',
    sizeText: 'Size(sq.ft)',
    applyfilterText: 'Apply Filters',
    requestMotorText: 'Buy a Motor',
    //requestlistingMotorText: 'Motor',
    requestPropertyText: 'Rent a Property',
    requestlistingPropertyText: 'Properties for Rent',
    requestlistingSaleText: 'Properties for Sale',
    requestSaleText: 'Buy a Property',
    createRequestText: 'CREATE A REQUEST',
    agency: 'Agency',
    gears: "'Gears",
    sold: 'Sold',
    forSale: 'For Sale',
    addressText: 'Address',
    cylinderText: 'Cylinders',
    regionalSpecificationText: 'Region Spec',
    mechanicalConditionText: 'Mechanical Condition',
    serviceHistoryText: 'Service History',
    engineDisplacementText: 'Engine Displacement',
    contactSellerText: 'Contact Seller',
    callnowText: 'CALL NOW',
    rERANOText: 'RERA NO:',
    dEDNOText: 'DED NO:',
    permitText: 'PERMIT NO:',
    phoneText: 'Phone Number',
    helloText: 'Hello, I am interested in...',
    sendMessageText: 'Send Message',
    sheduledText: 'SCHEDULE',
    MinPrice: 'Min Price',
    maxPrice: 'Max Price',
    minSize: 'Min Size',
    maxsize: 'Max Size',
    minKM: 'Min Kilometers Driven',
    maxKM: 'Max Kilometers Driven',
    enginecc: 'Engine CC',
    furnishedtext: 'Furnished',
    verified: 'Verified',
    nbRooms: 'Number of Rooms',
    nbBaths: 'Number of Baths',
    nbDining: 'Number of Dining',
    nbLaudry: 'Number of Laundry',
    nbGarages: 'Number of Garages',
    fyear: 'Year',
    Syear: 'Select Year',
    serviceHistory: 'Service History',
    selectMake: 'Select Make',
    selectBody: 'Select Body',
    selectmodel: 'Select Model',
    titletext: 'Title',
    titleplaceholder: 'Enter title here',
    locationText: 'Location',
    sizesqText: 'Size (sq ft)',
    sizesqplaceholder: 'Enter size (SQ.FT) here',
    roominoutText: 'Room',
    roominputplaceholder: 'Enter no.of room here',
    bathinputText: 'Bathrooms',
    bathinputplcaeholder: 'Enter no.of bathrooms here',
    deatilrequestText: 'Deatils request',
    deatilsplaceholder: 'Enter deatils about your request',
    DescriptionText: 'Description',
    descripationplaceholder: 'Enter your Description here',
    colorText: 'color',
    colorPlaceholder: 'Enter your color here',
    doorsText: 'Doors',
    doorPplaceholder: 'Enter no of doors here',
    cylinderplaceholder: 'Enter your cylinder here',
    regionalspecification: 'Regional Specification',
    regionalspecificationplaceholder: 'Select the regional spec.',
    transmissionText: 'Transmission',
    transmissionplaceholder: 'Select the specs of your car.',
    minyear: 'Min Year',
    yearplaceholder: 'Select Year',
    maxyear: 'Max Year',
    min: 'Min',
    max: 'Max',
    sqft1200: 'Sq ft 1200',
    sqft1500: 'Sq ft 1500',
    warrantydeatilsText: 'Are you looking for a warranty? yes/no',
    generalInformationText: 'General Information',
    createRequest: 'Create a Request',
    lookingproperttext: 'Looking Property For',
    roomsNumber: 'No. of Rooms',
    bathsNumber: 'No. of Baths',
    requestdeatils: 'Request Details',
    saleText: 'Sale',
    warranty: 'Warranty',
    closerequest: 'Close Request',
    lookingMotor: 'Looking Motor For',
    rightcategory: 'Select right category for your request',
    accountinfoText: 'Account Info',
    nameplaceholder: 'Enter your name',
    emailplaceholder: 'Enter your email',
    phoneplaceholder: 'Enter your phone number here',
    saveBtn: 'SAVE CHANGES',
    deleteAccount: 'DELETE ACCOUNT',
    subjectText: 'Subject',
    subjectplaceholder: 'Enter your subject here',
    messageplaceholder: 'Enter your message here',
    emailplaceholder: 'Enter your email here',
    passwordplaceholder: 'Enter your Password here',
    pickdateText: 'Pick Date',
    contactseller: 'Contact Seller',
    videoshedule: 'Schedule a Video Tour',
    physicalTour: 'Schedule a Physical Tour',
    scheduleDrive: 'Schedule a Test Drive',
    permitText: 'License number: ',
    viewlisiting: 'View all listing',
    seemore: 'See More',
    seeLess: 'See Less',
    noDoor: 'Number of Doors',
    noWheels: 'Number of Wheels',
    bodyCondition: 'Body Condition',
    accountInfoText: 'Account Info',
    guestuser: 'Guest User',
    loginuserText: 'Login as a User',
    newpasswordplaceholder: 'Enter your new Password here',
    confirmnewpassword: 'Confirm New Password',
    confirmpasswordplaceholder: 'Enter your confirm Password here',
    okayText: 'Okay',
    successText: 'Success!',
    oppsText: 'Oops!',
    accessDeniedModelMessage: 'You need to login to continue',
    accessDeniedModelbtntext: 'Login/SignUp',
    //accessDeniedModelHeading: 'Access denied.Login as a User',
    successFailMeSSAGE: 'This feature is only accessible after login',
    successModelbtntext: 'Proceed to Login',
    successModelheading: 'Continue as a Guest',
    mobileText: 'Mobile',
    phoneText: 'PHONE',
    callpopupHeading: 'When calling us, please quote Reference ID',
    closeText: 'Close',
    fieldemypt: 'Fields are Empty',
    passworderror:
      'Invalid Password format, Min. 8 characters, at least one uppercase letter, one lowercase letter, and one number',
    emailerror: 'Email is Not Correct',
    contectussucessmessage: 'ContactUs has been sumbited',
    changepasswordsuccessmessage: 'Passowrd has chnaged successfully',
    profilesuccessmessage: 'Profile has been submitted',
    feedbacksuccessmessage: 'Feedback has been sumbited',
    recentlyPublishedmotors: 'Recently Published for Motors',
    recentlyPublishedproperties: 'Recently Published for Properties',
    motorheadingText: 'Motors',
    propertiesheadingText: 'Properties',
    steeringsideText: 'Steering Side',
    profileText: 'Profile',
    motortabTex: 'Motor',
    vendorText: 'Vendor',
    markreadText: 'Mark Read',
    changeLanguage: 'Change Language',
    enterlocationText: 'Enter Location',
    addressText: 'Address',
    searchAddress: 'Enter Address here',
    locationConfirm: 'CONFIRM LOCATION',
    becomevendor: 'Become a vendor',
    viewlAll: 'View All',
    selectagentagerncy: 'Select Agent / Agency',
  },

  ar: {
    welcome: 'مرحبًا بك في',
    getStartPlaceholder: 'ابدأ الآن',
    premiumProperties: 'خصائص مميزة',
    premiumMotors: 'بريميوم موتورز',
    searchLocation: 'موقع البحث',
    search: 'يبحث',
    signInPlaceholder: 'تسجيل الدخول',
    forgetPasswordPlaceholder: 'هل نسيت كلمة المرور',
    proceedHolder: 'متابعة',
    signInButtonPlaceholder: 'تسجيل الدخول',
    proceedText: 'متابعة',
    emailphoneInput: 'البريد الإلكتروني',
    emailpasswordInput: 'عنوان البريد الإلكتروني',
    passwordInput: 'كلمة المرور',
    signIndonthaveAccount: 'ليس لديك حساب؟',
    asaGuest: 'الاستمرار كضيف',
    signUpText: 'اشتراك',
    nameInput: 'الاسم',
    emailInpit: 'البريد الإلكتروني',
    phoneInput: 'الهاتف',
    confirm: 'تؤكد',
    residential: 'سكني',
    commercial: 'تجاري',
    confirmpasswordInput: 'تأكيد كلمة المرور',
    signUpAlreadyAccount: 'هل لديك حساب؟',
    verfication: 'التحقق',
    verificationheading: 'تم إرسال رمز التحقق إلى رقمك',
    codetext: 'العميل',
    homeText: 'الصفحة الرئيسية',
    resendCode: 'أعد إرسال الرمز',
    rentText: 'عقارات للإيجار',
    saleText: 'عقارات للبيع',
    motorText: 'سيارات للبيع',
    perfecthomeText: 'ابحث عن منزلك المثالي',
    perfectmotorText: 'ابحث عن سيارتك المثالية',
    featuredmotorText: 'اكتشف السيارات المميزة لدينا',
    featuredpropertyText: 'اكتشف عقاراتنا المميزة',
    blogText: 'موجز أخبارنا',
    readmoreText: 'قراءة المزيد',
    trendingpropertyText: 'العقارات الرائجة',
    trendingcarText: 'السيارات الرائجة',
    alertsText: 'تنبيهات',
    newsfeedText: 'موجز الأخبار',
    newsText: 'تفاصيل الأخبار',
    settingText: 'الإعدادات',
    accountinfoText: 'معلومات الحساب',
    wishlistText: 'قائمة أمنياتي',
    myrequestsText: 'طلباتي',
    notificationsText: 'تنبيهات',
    helpText: 'مساعدة',
    logouttext: 'تسجيل خروج',
    wishlistpropertyText: 'العقارات المحفوظة',
    wishlistmotorText: 'السيارات المحفوظة',
    aboutUs: 'من نحن',
    termcondidtionText: 'الشروط والأحكام',
    privacypolicyText: 'سياسة الخصوصية',
    faqText: 'الأسئلة الشائعة',
    customerText: 'دعم العملاء',
    faqTextt: 'الأسئلة الشائعة',
    contactText: 'اتصل بنا',
    contactOnWhatsapp: 'الاتصال على Whatsapp',
    feedbackText: 'التعليق',
    meesageText: 'رسالة',
    getintouchText: 'ابقى على تواصل',
    sendusFeedbackText: 'أرسل إلينا تعليقات من تجربتك على تطبيقنا',
    deatilfeedbackText:
      'تعليقك مهم جدًا بالنسبة لنا. شارك تجربتك على تطبيقنا وساعدنا على التحسين أكثر.',
    typeherePlaceholder: 'أدخل الوصف هنا',
    sendText: 'إرسال',
    trendText: 'الاتجاهات',
    trendHeading: 'يحلم الجميع بسيارة أودي. احصل على واحدة اليوم!',
    trendHHeading: 'يحلم الجميع بمنزل. احصل على واحد اليوم!',
    aed: 'درهم إماراتي',
    exploreHeading: 'اكتشف',
    descriptionText: 'الوصف',
    featuresText: 'المزايا',
    propertyDeatils: 'تفاصيل العقار',
    motorDeatils: 'تفاصيل السيارة',
    PropertyReference: 'مرجع العقار',
    MotorReference: 'مرجع السيارة',
    bedroomsText: 'غرف النوم',
    makeText: 'الصناعة',
    bathroomsText: 'الحمامات',
    modelText: 'الطراز',
    garageText: 'كراج',
    yearText: 'سنة البناء',
    propertyAdsdate: 'تاريخ إعلانات العقار',
    carAdsdate: 'تاريخ إعلانات السيارة',
    propertylastupdate: 'تاريخ تحديث العقار',
    carlastupdate: 'تاريخ تحديث السيارة',
    properystatusText: 'حالة العقار',
    capacityText: 'السعة',
    priceText: 'السعر',
    keyword: 'كلمة رئيسية',
    enterkeyword: 'أدخل الكلمات الرئيسية ذات الصلة',
    agent: 'وكيل / وكالة',
    conditionText: 'حالة الجسم',
    propertysizeText: 'حجم العقار',
    yearBuildText: 'عام الإنشاء',
    warrantyText: 'الضمان',
    fuelTypeText: 'نوع الوقود/ الأميال',
    steeringSideText: 'جانب القيادة',
    garagesText: 'كراجات',
    furnishedText: 'مفروش',
    horsePowerText: 'القدرة الحصانية',
    videoText: 'فيديو',
    locationText: 'الموقع',
    floorPlansText: 'مخططات الطوابق',
    chart1heading: 'السعر الاتجاه',
    chart2heading: 'متوسط ​​الإيجار السنوي',
    chart1: 'عرض أسعار القائمة واتجاهات أسعار المعاملات للممتلكات المماثلة.',
    PropertyDocument: 'وثيقة الملكية',
    PropertyDocumentdeatils:
      'عرض أسعار القائمة واتجاهات أسعار المعاملات للممتلكات المماثلة.',
    floorText: ' الطابق',
    size: 'بحجم',
    selectagentagerncy: 'حدد وكيل / وكالة',
    kDriven: 'عدد الكيلومترات المقطوعة',
    buildYear: 'سنة البناء',
    sizeText: 'الحجم (قدم مربع)',
    roomText: 'الغرف',
    bathtext: 'حمامات',
    contactSellerText: 'تواصل مع البائع',
    homePlaceholder: 'عن ماذا تبحث',
    propertyFeaturedText: 'قائمة مميزة لـ',
    exploreCititesText: 'اكتشف المدن',
    propertyRecentText: 'تم نشره مؤخرًا لـ',
    propertyListText: 'قائمة العقارات',
    propertysearchPlaceholder: 'ابحث عن منزلك المثالي',
    carListText: 'قائمة السيارات',
    carsearchPlaceholder: 'ابحث عن سيارتك المثالية',
    filterText: 'عامل التصفية',
    clearAllText: 'مسح الكل',
    sortByText: 'صنف حسب',
    sortPlaceholder: 'حدد طلب السعر',
    carMakeText: 'صنع السيارة',
    carbodyText: 'نوع هيكل السيارة',
    carmodelText: 'طراز السيارة',
    cartransmissionText: 'نقل السيارة',
    cityText: 'المدينة',
    gearsText: 'التروس',
    wheelsText: 'عجلات',
    mileageText: 'عدد الأميال',
    categoriesText: 'الفئات',
    bodyTypeText: 'نوع الهيكل',
    bathText: 'الحمامات',
    bedText: 'سرير',
    sqftText: 'قدم مربع',
    applyfilterText: 'تطبيق عوامل التصفية',
    requestMotorText: 'شراء سيارة',
    requestlistingMotorText: 'السيارة',
    requestPropertyText: 'تأجير عقار',
    requestlistingPropertyText: 'عقار للإيجار',
    requestlistingSaleText: 'عقار للبيع',
    requestSaleText: 'شراء عقار',
    createRequestText: 'أنشئ طلبًا',
    agency: 'وكالة',
    gears: 'التروس',
    sold: 'مُباع',
    forSale: 'للبيع',
    addressText: 'العنوان',
    cylinderText: 'الاسطوانة',
    regionalSpecificationText: 'المواصفات الإقليمية',
    mechanicalConditionText: 'الحالة الميكانيكية',
    serviceHistoryText: 'سجل الصيانة',
    engineDisplacementText: 'إزاحة المحرك',
    rERANOText: 'رقم مؤسسة التنظيم العقاري:',
    dEDNOText: 'رقم دائرة التنمية العقارية:',
    permitText: 'رقم التصريح:',
    phoneText: 'رقم الهاتف',
    helloText: 'مرحبًا، أنا مهتم بـ ...',
    sendMessageText: 'أرسل رسالة',
    sheduledText: 'جدول',
    newpassword: 'كلمة المرور الجديدة',
    forgotPassword: 'هل نسيت كلمة المرور',
    saleText: 'بيع',
    perfectmotorText: 'ابحث عن سيارة أحلامك',
    changepassword: 'تغيير كلمة المرور',
    propertyDeatils: 'تفاصيل العقار',
    diningText: 'عدد وجبات الطعام',
    rentproceText: 'الإيجار(سنوياً)',
    kmDriven: 'الكيلومترات المقطوعة',
    yearBuildText: 'عام الإنشاء',
    fuelTypeText: 'نوع الوقود',
    steeringSideText: 'جانب القيادة',
    clearAllText: 'إعادة التعيين',
    transmissionText: 'ناقل الحركة',
    requestlistingPropertyText: 'عقارات للإيجار',
    cylinderText: 'الاسطوانات',
    callnowText: 'اتصل الآن',
    permitText: 'رقم التصريح:',
    phoneText: 'الهاتف',
    MinPrice: 'الحد الأدنى للسعر',
    maxPrice: 'الحد الأقصى للسعر',
    minSize: 'أقل حجم',
    maxsize: 'أقصى حجم',
    minKM: 'الحد الأدنى للكيلومترات المقطوعة',
    maxKM: 'الحد الأقصى الكيلومترات المقطوعة',
    enginecc: 'محرك سي سي',
    nbRooms: 'عدد الغرف',
    nbBaths: 'عدد الحمامات',
    nbDining: 'عدد وجبات الطعام',
    nbLaudry: 'عدد  المغاسل',
    nbGarages: 'عدد مواقف السيارات',
    fyear: 'العام',
    selectMake: 'حدد الصنع',
    selectBody: 'حدد نوع الهيكل',
    selectmodel: 'حدد الطراز',
    titletext: 'العنوان',
    titleplaceholder: 'أدخل العنوان هنا',
    sizesqText: 'الحجم (قدم مربع)',
    sizesqplaceholder: 'أدخل الحجم (قدم مربع) هنا',
    roominoutText: 'غرفة',
    roominputplaceholder: 'أدخل رقم الغرفة هنا',
    bathinputText: 'الحمامات',
    bathinputplcaeholder: 'أدخل عدد الحمامات هنا',
    deatilrequestText: 'طلب التفاصيل',
    deatilsplaceholder: 'أدخل بيانات حول طلبك',
    descripationplaceholder: 'أدخل الوصف الخاص بك  هنا',
    colorText: 'اللون',
    colorPlaceholder: 'أدخل اللون  هنا',
    doorsText: 'الأبواب',
    doorPplaceholder: 'أدخل عدد الأبواب هنا',
    cylinderplaceholder: 'أدخل عدد الاسطوانات  هنا',
    regionalspecification: 'المواصفات الإقليمية',
    regionalspecificationplaceholder: 'حدد المواصفات الإقليمية.',
    transmissionplaceholder: 'حدد مواصفات سيارتك.',
    minyear: 'الحد الأدنى للسنة',
    yearplaceholder: 'اختر السنة',
    maxyear: 'الحد الأقصى للسنة',
    warrantydeatilsText: 'هل تبحث عن ضمان؟ نعم/لا',
    generalInformationText: 'معلومات عامة',
    lookingproperttext: 'البحث عن عقار',
    roomsNumber: 'عدد الغرف',
    bathsNumber: 'عدد الحمامات',
    requestdeatils: 'تفاصيل الطلب',
    closerequest: 'إغلاق الطلب',
    lookingMotor: 'البحث عن سيارة',
    rightcategory: 'حدد الفئة المناسبة لطلبك',
    nameplaceholder: 'أدخل اسمك',
    emailplaceholder: 'اضف  البريد الخاص بك هنا',
    phoneplaceholder: 'أدخل رقم هاتفك هنا',
    saveBtn: 'حفظ التغييرات',
    deleteAccount: 'حذف الحساب',
    subjectText: 'الموضوع',
    subjectplaceholder: 'أدخل الموضوع  هنا',
    messageplaceholder: 'اكتب رسالتك',
    passwordplaceholder: 'أدخل كلمة المرور',
    pickdateText: 'اختر التاريخ',
    contactseller: 'تواصل مع البائع',
    videoshedule: 'جدولة جولة فيديو',
    physicalTour: 'حدد موعدًا لجولة بدنية',
    scheduleDrive: 'حدد موعدًا لاختبار القيادة',
    viewlisiting: 'عرض جميع مزودي الخدمات',
    seemore: 'للمزيد',
    seeLess: 'رؤية أقل',
    noDoor: 'عدد الأبواب',
    noWheels: 'عدد العجلات:',
    bodyCondition: 'حالة الجسم',
    accountInfoText: 'معلومات الحساب',
    guestuser: 'مستخدم زائر',
    loginuserText: 'تسجيل الدخول كمستخدم',
    newpasswordplaceholder: 'أدخل كلمة السر الجديدة هنا',
    confirmnewpassword: 'تأكيد كلمة المرور الجديدة',
    confirmpasswordplaceholder: 'أدخل تأكيد كلمة المرور الخاصة بك هنا',
    okayText: 'حسنا.',
    successText: 'نجاح!',
    oppsText: 'عذرًا!',
    accessDeniedModelMessage: 'الرجاء تسجيل الدخول للاستمرار.',
    accessDeniedModelbtntext: 'تسجيل الدخول أو الإشتراك',
    successFailMeSSAGE: 'لا يمكن الوصول إلى هذه الميزة إلا بعد تسجيل الدخول',
    successModelbtntext: 'المتابعة إلى تسجيل الدخول',
    successModelheading: 'الاستمرار كزائر',
    mobileText: 'هاتف جوال',
    callpopupHeading: 'عند الاتصال بنا ، يرجى ذكر الرقم المرجعي',
    closeText: 'إغلاق',
    fieldemypt: 'الحقول فارغة',
    passworderror:
      'كلمة المرور غير صالحة ، بحد أدنى 8 أحرف ، وحرف كبير واحد على الأقل ، وحرف صغير واحد ، ورقم واحد',
    emailerror: 'البريد الإلكتروني غير صحيح',
    contectussucessmessage: 'تم تقديم التواصل معنا',
    changepasswordsuccessmessage: 'تم تغيير كلمة السر بنجاح',
    profilesuccessmessage: 'تم إرسال الملف الشخصي',
    feedbacksuccessmessage: 'تم تقديم الآراء',
    recentlyPublishedmotors: 'تم نشره مؤخرًا للسيارات',
    recentlyPublishedproperties: 'تم النشر مؤخرًا للعقارات',
    motorheadingText: 'سيارات',
    propertiesheadingText: 'العقارات',
    steeringsideText: 'جانب القيادة',
    profileText: 'الملف التعريفي',
    vendorText: 'البائع',
    markreadText: 'وضع علامة مقروء',
    changeLanguage: 'تغيير اللغة',
    enterlocationText: 'أدخل الموقع',
    searchAddress: 'أدخل العنوان هنا',
    locationConfirm: 'أكد الموقع ',
    becomevendor: 'كن موردًا',
    viewlAll: 'عرض الكل',
    laundryText: 'عدد الغسيل',
    salesText: 'عقارات للبيع',
    furnishedtext: 'مفروشة، مد، زود',
    verified: 'تم التحقق',
    Syear: 'حدد السنة',
    serviceHistory: 'سجل الخدمة',
    DescriptionText: 'وصف',
    min: 'دقيقة',
    max: 'الأعلى',
    sqft1200: 'قدم مربع 1200',
    sqft1500: 'قدم مربع 1500',
    createRequest: 'قم بإنشاء طلب',
    warranty: 'ضمان',
    motortabTex: 'محرك',
  },
});

initializeRTL(localizedString);

export {localizedString};
