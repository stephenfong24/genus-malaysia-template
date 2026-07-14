import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Language = 'en' | 'zh';

const STORAGE_KEY = 'genus-language';

export const translations = {
  en: {
    languageName: 'English',
    nav: {
      home: 'Home',
      whyUs: 'Why Us',
      brands: 'Brands',
      faq: 'FAQ',
      contact: 'Contact',
      checkWarranty: 'Check Warranty',
      language: 'Language',
    },
    footer: {
      desc: 'GENUS MALAYSIA SDN BHD is a trusted car battery expert and premier battery wholesaler in Malaysia, specialising in high-performance Genus and K-viron car batteries with calcium-silver & EFB Glass mat technology.',
      quickLinks: 'Quick Links',
      services: 'Services',
      login: 'Login',
      contactCenter: 'Contact Center',
      office: 'Office: +603-8962 2111',
      whatsapp: 'WhatsApp: +60 16-262 7528',
      hours: 'Mon-Fri: 9am-6pm | Sat: 9am-1pm',
      rights: '© 2026 GENUS MALAYSIA SDN BHD. All Rights Reserved.',
      tagline: "Powering Malaysia's Roadways with Excellence.",
    },
    home: {
      heroTitleTop: 'Trusted Car Battery',
      heroTitleAccent: 'Wholesaler & Experts',
      heroSubtitle: 'We’re your trusted car battery experts - fast, reliable, and always ready to help. We specialise in high-performance Genus and K-viron car batteries, including calcium-silver technology & EFB Glass mat technology for longer-lasting durability.',
      badges: ['✓ Wholesaler Price', '✓ Genus & K-Viron', '✓ Official Warranty', '✓ Certified Experts'],
      whatsapp: 'WhatsApp Now',
      wholesaleSupply: 'Wholesale Supply',
      trustedSupplier: 'Trusted National Supplier',
      genusKviron: 'Genus & K-Viron',
      premiumHighPerformance: 'Premium High-Performance',
      healthy: 'HEALTHY',
      stats: ['Batteries Distributed', 'Years Experience', 'Genuine Warranty', 'Premium Standards'],
      servicesSubtitle: 'What We Offer',
      servicesTitle: 'Professional Automotive Battery Solutions',
      servicesDesc: 'We provide a premium suite of car battery solutions to ensure your vehicles and dealership inventories remain powered with high-performance energy.',
      services: [
        ['Battery Wholesaling', 'As a premier battery wholesaler, we offer high-performance batteries at competitive distributor prices for retailers, fleets, and workshops.'],
        ['Expert Battery Delivery', 'Fast, reliable dispatch and delivery of premium car batteries directly to your workshop, home, or office during standard business hours.'],
        ['Onsite Installation', 'Precision onsite installation conducted by certified battery experts following manufacturer specifications for ultimate safety.'],
        ['Battery Diagnostics', 'Comprehensive battery, alternator, and starter diagnostics using professional digital testers to verify health metrics.'],
        ['Genus & K-Viron Lines', 'We specialise in high-performance Genus and K-viron car batteries with calcium-silver technology & EFB Glass mat technology.'],
        ['Official Factory Warranty', 'Full factory warranty support ranging from 12 to 18 months, backed by our robust wholesaler replacement commitment.'],
      ],
      testimonialsSubtitle: 'Customer Stories',
      testimonialsTitle: 'What Malaysian Drivers Say',
      testimonialsDesc: 'Read real, high-trust reviews from drivers and commercial workshops who have experienced our premium battery distribution and expert supply services.',
      testimonials: [
        ['Suresh Kumar', 'Petaling Jaya, Selangor', 'My car battery died completely at my condominium parking lot in PJ. Called Genus, and their mobile technician arrived in just 25 minutes! Extremely professional service, did a free starter health test, and replaced it cleanly. 10/10!'],
        ['Sarah Ahmad', 'KLCC, Kuala Lumpur', 'The level of professionalism was stellar. There were no hidden fees. The price they quoted over the WhatsApp message was exactly what I paid. He even showed me how to read the official warranty slip. Highly recommended.'],
        ['Marcus Tan', 'Workshop Owner, Subang Jaya', 'As a workshop owner, finding a reliable car battery wholesaler is crucial. Genus Malaysia supplies us with top-tier Genus and K-viron batteries on time. Their calcium-silver technology is highly requested by our clients for its incredible longevity!'],
      ],
      timelineSubtitle: 'How It Works',
      timelineTitle: 'Our Simple 5-Step Supply Process',
      timelineDesc: 'Acquiring high-performance car batteries is straightforward. We make battery supply, delivery, and professional installation completely hassle-free.',
      steps: [
        ['Step 1: Inquiry & Quote', 'Submit our digital form or send a WhatsApp message with your battery requirements or vehicle model. We reply immediately with competitive distributor pricing.'],
        ['Step 2: Order Fulfillment', 'Our warehouse team carefully prepares your high-performance Genus or K-viron batteries, ensuring they are fresh from the factory and fully tested.'],
        ['Step 3: Delivery Dispatch', 'We arrange prompt delivery directly to your home, office, or workshop within our standard business hours.'],
        ['Step 4: Expert Installation', "Our skilled technicians perform a clean and safe installation on-site, including a diagnostic check of your vehicle's alternator charging system."],
        ['Step 5: Warranty Activation', 'Once completed, we activate your official 12 to 18-month warranty to guarantee long-term reliability and peace of mind.'],
      ],
      gallerySubtitle: 'Work Gallery',
      galleryTitle: 'Onsite Operations & Distributions',
      galleryDesc: 'Take an inside look at our daily operations, professional automotive battery diagnostics, expert onsite installations, and premium inventory distribution.',
      gallery: [
        ['BMW Battery Replacement', 'Delivering and preparing dual high-performance Genus batteries for onsite replacement on a BMW 3 Series.'],
        ['Sleek Workshop Operations', 'A premium BMW sedan in our workshop undergoing starter, alternator, and electrical system diagnostics.'],
        ['Genus vs OEM Battery', "Comparing the premium calcium-silver Genus AGM battery side-by-side with the vehicle's factory battery."],
        ['Clean Trunk Installation', 'A fresh Genus G59220 AGM battery securely installed in the trunk compartment with professional cabling.'],
        ['Daily Battery Deliveries', 'Our delivery fleet stacked with fresh stocks of Genus and K-Viron car batteries ready to supply dealerships and workshops.'],
      ],
    },
    whyUs: {
      badgeTitle: 'EXPERT',
      badgeText: 'Wholesale Supplier',
      subtitle: 'Our Advantage',
      title: 'Why Workshops & Drivers Choose GENUS',
      overview: 'At GENUS MALAYSIA SDN BHD, we’re your trusted car battery experts. We specialise in high-performance Genus and K-viron car batteries, including calcium-silver technology & EFB Glass mat technology for longer-lasting durability.',
      reasons: [
        ['Professional Technicians', 'Our staff are thoroughly trained to install car batteries for standard, luxury, and hybrid vehicles without harming vehicle ECU systems.'],
        ['Transparent & Honest Pricing', 'No hidden charges or unexpected callback fees. The battery price we quote includes delivery, installation, and alternator testing.'],
        ['Reliable Supply Chain', 'With extensive inventory levels and robust wholesale logistics, we guarantee that you get the right battery, right when you need it.'],
      ],
    },
    brands: {
      subtitle: 'Premium Portfolios',
      title: 'Authorized Battery Brands',
      desc: 'We maintain robust inventory levels of high-performance car batteries specialising in Genus and K-viron brands alongside other global automotive brands.',
      brandDescs: ['Calcium-Silver / EFB', 'Premium Durability', 'Long Life Battery', 'German Technology', 'Premium European', 'Malaysian Pioneer'],
      featured: 'Featured Brand',
      genusTitle: 'Genus Batteries',
      paragraph1: 'Genus Battery in Malaysia is a rising brand known for high-performance automotive and industrial energy solutions. Featuring advanced Calcium-Silver technology, their batteries deliver strong, stable starting power and are designed to resist high temperatures and frequent stopping-and-starting.',
      paragraph2: 'With a local hub located in Serdang, Selangor, Genus provides reliable, long-lasting power for everyday passenger cars as well as heavy-duty inverters and solar systems globally. Key features of their batteries include:',
      features: [
        ['Calcium-Silver Technology', 'Enhances cranking power and extends overall lifespan.'],
        ['High Heat Resistance & Anti-Vibration', 'Built to withstand demanding tropical climates and rough road conditions.'],
        ['Low Maintenance & Fast Charging', 'Engineered for convenience, deep discharge recovery, and rapid charge retention.'],
      ],
      whyChooseTitle: 'Why Choose Genus Batteries',
      whyChooseIntro: 'Built for everyday confidence, harsh local conditions, and dependable long-term ownership.',
      whyChooseItems: [
        ['Reliable Starting Power', 'Engineered to deliver dependable engine starts with consistent electrical performance.'],
        ['Built for Tropical Climate', "Designed to withstand Malaysia's high temperatures and humid driving conditions."],
        ['Long Service Life', 'Manufactured using quality materials and advanced production processes for extended battery life.'],
        ['Maintenance-Free Convenience', 'Selected models feature sealed maintenance-free technology for hassle-free ownership.'],
        ['Quality Assured', "Every battery undergoes strict quality control and performance testing before reaching customers. Public information about the broader Genus group's manufacturing highlights advanced testing and quality-focused production processes."],
        ['Warranty Support', 'Comprehensive warranty coverage through our authorised dealer network, giving customers greater peace of mind.'],
      ],
      productRangeEyebrow: 'Product Range',
      productRangeTitle: 'Our Product Range',
      productRangeIntro: 'Genus Batteries offers a comprehensive range of automotive batteries to suit various vehicle types and driving requirements.',
      productRangeItems: [
        ['Passenger Vehicle Batteries', 'Reliable maintenance-free batteries designed for everyday driving with dependable starting performance and long-lasting durability.'],
        ['SUV & MPV Batteries', 'High-capacity batteries engineered to support larger vehicles with increased electrical demands.'],
        ['Commercial Vehicle Batteries', 'Heavy-duty batteries built to deliver dependable performance for vans, trucks, and commercial fleets operating under demanding conditions.'],
        ['Fleet Solutions', 'Battery solutions tailored for business fleets, helping maximise vehicle uptime and operational efficiency.'],
      ],
      productRangeClosing: 'No matter your destination, Genus Batteries provides dependable power that keeps you moving with confidence.',
    },
    faq: {
      subtitle: 'Got Questions?',
      title: 'Frequently Asked Questions',
      desc: 'Find rapid answers to the most common inquiries regarding our onsite delivery, warranty procedures, and battery configurations.',
      items: [
        ['How long does the battery delivery and installation take?', 'Our delivery and installation team operates efficiently. During our standard business hours, we schedule and dispatch your battery promptly, ensuring a quick and seamless setup process.'],
        ['Do you provide a warranty with the car batteries?', "Yes! All of our batteries come with an official manufacturer's warranty. Standard petrol cars are backed by an onsite 12 to 18-month warranty, whereas commercial/diesel vehicles are covered for 6 to 12 months."],
        ['Can you install the battery at my office or shopping mall parking?', 'Absolutely. Our mobile dispatch units are fully outfitted with compact, powerful diagnostic equipment. We can perform complete diagnostic sweeps and battery installations in tight underground structures, office parking bays, or home porches.'],
        ['What brands of car batteries do you have available?', 'We maintain stock of high-performance car battery lines from international automotive tier-1 manufacturers including Bosch, Century, Amaron, Varta, and Yuasa. All units are fresh from production lines.'],
      ],
      hoursQuestion: 'What are your business operating hours?',
      hoursIntro: 'Our headquarters and supply operations are open during the following hours:',
      weekday: 'Monday - Friday:',
      saturday: 'Saturday:',
      sunday: 'Sunday:',
      closed: 'Closed',
    },
    contact: {
      infoTitle: 'Headquarters Info',
      infoDesc: 'Have questions or looking to purchase high-performance batteries? Get in touch with our expert sales team during our business hours.',
      whatsappSupport: 'WhatsApp Support',
      corporateEmail: 'Corporate Email',
      office: 'Office',
      corporateOffice: 'Corporate Office',
      businessHours: 'Business Hours',
      mondayFriday: 'Mon - Fri: 9:00 AM - 6:00 PM',
      saturday: 'Sat: 9:00 AM - 1:00 PM',
      sunday: 'Sun: Closed',
      locationTitle: 'Headquarters Location',
      locationDesc: 'Our main warehouse and showroom is strategically situated in Balakong, allowing convenient distribution across Selangor and Kuala Lumpur.',
      openMaps: 'Open in Google Maps',
    },
    login: {
      badge: 'Coming Soon',
      title: 'Dealer Portal Access',
      desc: 'Our highly secure wholesale ordering system & dealer network portal is currently undergoing final beta tests and certification.',
      dealerCode: 'Dealer Code',
      password: 'Password',
      button: 'Portal Under Construction',
      encryption: '256-bit AES Encryption Confirmed',
    },
    warranty: {
      badge: 'Warranty Check Coming Soon',
      title: 'Check Battery Warranty',
      desc: 'Soon you will be able to verify your Genus or K-Viron battery warranty using the battery serial number or purchase details. Check whether your warranty is active, review the registered purchase date, and get clear next steps for support or replacement claims.',
      placeholder: 'Enter battery serial number',
      check: 'Check',
      status: 'Warranty Status',
      statusDesc: 'Confirm active battery coverage',
      record: 'Purchase Record',
      recordDesc: 'View purchase and expiry dates',
      guidance: 'Claim Guidance',
      guidanceDesc: 'Know what to prepare for support',
    },
  },
  zh: {
    languageName: '简体中文',
    nav: {
      home: '首页',
      whyUs: '为什么选择我们',
      brands: '品牌',
      faq: '常见问题',
      contact: '联系我们',
      checkWarranty: '查询保修',
      language: '语言',
    },
    footer: {
      desc: 'GENUS MALAYSIA SDN BHD 是马来西亚值得信赖的汽车电池专家与优质电池批发商，专营高性能 Genus 和 K-viron 汽车电池，采用钙银技术与 EFB 玻璃纤维隔板技术。',
      quickLinks: '快速链接',
      services: '服务',
      login: '登录',
      contactCenter: '联系中心',
      office: '办公室：+603-8962 2111',
      whatsapp: 'WhatsApp：+60 16-262 7528',
      hours: '周一至周五：9am-6pm | 周六：9am-1pm',
      rights: '© 2026 GENUS MALAYSIA SDN BHD。版权所有。',
      tagline: '以卓越动力驱动马来西亚道路。',
    },
    home: {
      heroTitleTop: '值得信赖的汽车电池',
      heroTitleAccent: '批发商与专家',
      heroSubtitle: '我们是您值得信赖的汽车电池专家，服务快速、可靠，并随时准备协助。我们专营高性能 Genus 与 K-viron 汽车电池，包括钙银技术和 EFB 玻璃纤维隔板技术，带来更持久的耐用表现。',
      badges: ['✓ 批发价格', '✓ Genus 与 K-Viron', '✓ 官方保修', '✓ 认证专家'],
      whatsapp: '立即 WhatsApp',
      wholesaleSupply: '批发供应',
      trustedSupplier: '值得信赖的全国供应商',
      genusKviron: 'Genus 与 K-Viron',
      premiumHighPerformance: '优质高性能',
      healthy: '状态良好',
      stats: ['已配送电池', '年经验', '正品保修', '优质标准'],
      servicesSubtitle: '我们提供',
      servicesTitle: '专业汽车电池解决方案',
      servicesDesc: '我们提供优质汽车电池解决方案，确保您的车辆与经销库存持续获得高性能电力支持。',
      services: [
        ['电池批发', '作为优质电池批发商，我们为零售商、车队和维修厂提供具竞争力经销价的高性能电池。'],
        ['专业电池配送', '在标准营业时间内，将优质汽车电池快速可靠地配送到您的维修厂、家中或办公室。'],
        ['现场安装', '由认证电池专家按照制造商规范进行精准现场安装，确保最高安全性。'],
        ['电池检测', '使用专业数码测试仪进行全面电池、发电机与启动马达检测，验证健康指标。'],
        ['Genus 与 K-Viron 系列', '我们专营采用钙银技术与 EFB 玻璃纤维隔板技术的高性能 Genus 和 K-viron 汽车电池。'],
        ['官方原厂保修', '提供 12 至 18 个月原厂保修支持，并由我们的批发商更换承诺作为后盾。'],
      ],
      testimonialsSubtitle: '客户故事',
      testimonialsTitle: '马来西亚车主怎么说',
      testimonialsDesc: '阅读车主与商业维修厂的真实高信任评价，了解他们对我们优质电池配送与专业供应服务的体验。',
      testimonials: [
        ['Suresh Kumar', '雪兰莪八打灵再也', '我的汽车电池在 PJ 公寓停车场完全没电。联系 Genus 后，移动技师 25 分钟就到了！服务非常专业，还免费检测启动系统，并干净利落地完成更换。10/10！'],
        ['Sarah Ahmad', '吉隆坡 KLCC', '专业程度非常出色，没有隐藏费用。WhatsApp 报价是多少，我实际支付就是多少。他还教我怎么看官方保修单。强烈推荐。'],
        ['Marcus Tan', '梳邦再也维修厂业主', '作为维修厂业主，找到可靠的汽车电池批发商非常重要。Genus Malaysia 准时供应顶级 Genus 与 K-viron 电池。客户非常喜欢他们钙银技术带来的超长寿命！'],
      ],
      timelineSubtitle: '服务流程',
      timelineTitle: '简单 5 步供应流程',
      timelineDesc: '采购高性能汽车电池非常简单。我们让电池供应、配送与专业安装变得完全省心。',
      steps: [
        ['步骤 1：询问与报价', '提交线上表格或通过 WhatsApp 发送您的电池需求或车型。我们会立即回复具竞争力的经销价格。'],
        ['步骤 2：订单准备', '仓库团队会仔细准备您的高性能 Genus 或 K-viron 电池，确保产品来自新鲜库存并完成测试。'],
        ['步骤 3：安排配送', '我们会在标准营业时间内，将电池直接配送到您的家、办公室或维修厂。'],
        ['步骤 4：专业安装', '熟练技师会在现场进行干净安全的安装，并检测车辆发电机充电系统。'],
        ['步骤 5：激活保修', '完成后，我们会激活您的官方 12 至 18 个月保修，保障长期可靠与安心。'],
      ],
      gallerySubtitle: '工作图库',
      galleryTitle: '现场作业与配送',
      galleryDesc: '深入了解我们的日常运营、专业汽车电池检测、现场安装以及优质库存配送。',
      gallery: [
        ['BMW 电池更换', '为 BMW 3 系现场更换准备并配送双组高性能 Genus 电池。'],
        ['精细维修厂作业', '一辆高级 BMW 轿车正在我们的维修厂进行启动马达、发电机与电路系统诊断。'],
        ['Genus 与原厂电池对比', '将优质钙银 Genus AGM 电池与车辆原厂电池进行并排比较。'],
        ['整洁后备箱安装', '全新 Genus G59220 AGM 电池已稳固安装在后备箱电池舱，并完成专业布线。'],
        ['每日电池配送', '配送车载满全新 Genus 与 K-Viron 汽车电池，准备供应经销商与维修厂。'],
      ],
    },
    whyUs: {
      badgeTitle: '专家',
      badgeText: '批发供应商',
      subtitle: '我们的优势',
      title: '为什么维修厂与车主选择 GENUS',
      overview: '在 GENUS MALAYSIA SDN BHD，我们是您值得信赖的汽车电池专家。我们专营高性能 Genus 和 K-viron 汽车电池，包括钙银技术与 EFB 玻璃纤维隔板技术，带来更持久的耐用表现。',
      reasons: [
        ['专业技师', '我们的员工经过全面培训，可为普通、豪华与混合动力车辆安装汽车电池，同时避免影响车辆 ECU 系统。'],
        ['透明诚实定价', '没有隐藏收费或意外回访费用。我们的电池报价已包含配送、安装与发电机检测。'],
        ['可靠供应链', '凭借充足库存与完善批发物流，我们确保您在需要时获得正确的电池。'],
      ],
    },
    brands: {
      subtitle: '优质品牌组合',
      title: '授权电池品牌',
      desc: '我们维持高性能汽车电池的充足库存，专注 Genus 与 K-viron 品牌，同时供应其他全球汽车品牌。',
      brandDescs: ['钙银 / EFB', '优质耐用', '长寿命电池', '德国技术', '欧洲优质品牌', '马来西亚先锋'],
      featured: '精选品牌',
      genusTitle: 'Genus 电池',
      paragraph1: 'Genus Battery 在马来西亚是一个迅速成长的品牌，以高性能汽车与工业能源解决方案闻名。凭借先进钙银技术，其电池可提供强劲稳定的启动动力，并能抵抗高温与频繁启停。 ',
      paragraph2: 'Genus 在雪兰莪沙登设有本地枢纽，为日常乘用车以及全球重型逆变器和太阳能系统提供可靠、持久的电力。其电池主要特点包括：',
      features: [
        ['钙银技术', '提升启动电力并延长整体寿命。'],
        ['高耐热与抗震', '适合应对热带气候与崎岖道路条件。'],
        ['低维护与快速充电', '专为便利性、深度放电恢复与快速蓄电而设计。'],
      ],
      whyChooseTitle: '为什么选择 Genus 电池',
      whyChooseIntro: '为日常驾驶信心、本地严苛气候与长期可靠使用而打造。',
      whyChooseItems: [
        ['可靠启动电力', '工程设计可提供可靠的引擎启动表现，并保持稳定的电气性能。'],
        ['适合热带气候', '专为承受马来西亚高温与潮湿驾驶环境而设计。'],
        ['更长使用寿命', '采用优质材料与先进生产流程制造，延长电池使用寿命。'],
        ['免维护便利性', '指定型号采用密封免维护技术，让车主使用更省心。'],
        ['品质保证', '每颗电池在交付客户前都经过严格品质控制与性能测试。关于更广泛 Genus 集团的公开信息也强调其先进测试与重视品质的生产流程。'],
        ['保修支持', '通过我们的授权经销商网络提供全面保修覆盖，为客户带来更安心的保障。'],
      ],
      productRangeEyebrow: '产品系列',
      productRangeTitle: '我们的产品系列',
      productRangeIntro: 'Genus 电池提供完整的汽车电池系列，适合不同车辆类型与驾驶需求。',
      productRangeItems: [
        ['乘用车电池', '可靠的免维护电池，专为日常驾驶设计，提供稳定启动表现与持久耐用性。'],
        ['SUV 与 MPV 电池', '高容量电池，专为支援较大型车辆与更高电气需求而设计。'],
        ['商用车电池', '重型电池，为厢型车、卡车与商业车队在严苛条件下提供可靠性能。'],
        ['车队解决方案', '为企业车队量身打造的电池解决方案，帮助提升车辆上线时间与运营效率。'],
      ],
      productRangeClosing: '无论您的目的地在哪里，Genus 电池都能提供可靠动力，让您充满信心地持续前行。',
    },
    faq: {
      subtitle: '有疑问？',
      title: '常见问题',
      desc: '快速了解有关现场配送、保修流程与电池配置的常见问题。',
      items: [
        ['电池配送和安装需要多久？', '我们的配送与安装团队运作高效。在标准营业时间内，我们会快速安排并派送电池，确保安装过程顺畅。'],
        ['汽车电池是否提供保修？', '是的！所有电池都附有官方制造商保修。一般汽油车享有 12 至 18 个月现场保修，商用或柴油车辆则享有 6 至 12 个月保修。'],
        ['可以在办公室或商场停车场安装电池吗？', '当然可以。我们的移动配送单位配备紧凑而强大的诊断设备，可在地下停车场、办公室停车位或住家门廊完成诊断与电池安装。'],
        ['你们有哪些汽车电池品牌？', '我们备有来自国际一级汽车制造商的高性能汽车电池系列，包括 Bosch、Century、Amaron、Varta 和 Yuasa。所有电池均来自新鲜生产库存。'],
      ],
      hoursQuestion: '你们的营业时间是什么？',
      hoursIntro: '我们的总部与供应业务营业时间如下：',
      weekday: '周一至周五：',
      saturday: '周六：',
      sunday: '周日：',
      closed: '休息',
    },
    contact: {
      infoTitle: '总部信息',
      infoDesc: '有问题或想购买高性能电池？请在营业时间内联系我们的专业销售团队。',
      whatsappSupport: 'WhatsApp 支援',
      corporateEmail: '公司电邮',
      office: '办公室',
      corporateOffice: '公司办公室',
      businessHours: '营业时间',
      mondayFriday: '周一至周五：9:00 AM - 6:00 PM',
      saturday: '周六：9:00 AM - 1:00 PM',
      sunday: '周日：休息',
      locationTitle: '总部位置',
      locationDesc: '我们的主要仓库与展示厅位于 Balakong，方便覆盖雪兰莪与吉隆坡的配送。',
      openMaps: '在 Google Maps 打开',
    },
    login: {
      badge: '即将推出',
      title: '经销商门户登录',
      desc: '我们高度安全的批发订购系统与经销商网络门户目前正在进行最终测试与认证。',
      dealerCode: '经销商代码',
      password: '密码',
      button: '门户建设中',
      encryption: '已确认 256-bit AES 加密',
    },
    warranty: {
      badge: '保修查询即将推出',
      title: '查询电池保修',
      desc: '很快您就可以使用电池序列号或购买资料验证 Genus 或 K-Viron 电池保修。您可查询保修是否有效、查看登记购买日期，并获得支援或更换索赔的清晰步骤。',
      placeholder: '输入电池序列号',
      check: '查询',
      status: '保修状态',
      statusDesc: '确认电池保修是否有效',
      record: '购买记录',
      recordDesc: '查看购买与到期日期',
      guidance: '索赔指引',
      guidanceDesc: '了解联系支援前需准备的资料',
    },
  },
} as const;

type Translation = typeof translations.en;

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    return window.localStorage.getItem(STORAGE_KEY) === 'zh' ? 'zh' : 'en';
  });

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
