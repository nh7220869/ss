import Link from "next/link";

async function Product({ params }: any) {
    const { product } = params;

    // Find the product from the Products array based on the product ID
    const selectedProduct = Products.find((p) => p.id === parseInt(product));

   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-lg">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            className="w-full h-auto object-contain rounded-lg shadow-lg"
            src={selectedProduct.img}
            alt={selectedProduct.title}
          />
        </div>
      
        {/* Details Section */}
        <div className="flex flex-col justify-center space-y-6 px-4 md:px-8 lg:px-16">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-800 text-center md:text-left">
            {selectedProduct.title}
          </h1>
          <h2 className="text-xs sm:text-sm md:text-base font-semibold text-gray-500 text-center md:text-left">
            {selectedProduct.title2}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center md:text-left">
            {selectedProduct.description}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 text-center md:text-left">
            ₹ 8,695.00
          </p>
          <button className="text-white bg-black px-6 py-3 sm:px-8 sm:py-4 w-auto rounded-2xl font-medium shadow-md self-center md:self-start">
          <Link href="/Order">
                <span>Add to Cart</span>
              </Link>
          </button>
        </div>
      </div>
      

      );
    };

export default Product;
const Products:any [] = [
    {
        id: 1,
        img: "/b1.png",
        title: "Nike Air Max Pulse",
        title2: "Women's Shoes",
        price: "₹ 13,995",
        description: "The Nike Air Max Pulse Women's Shoes seamlessly blend comfort and fashion, offering a breathable lightweight mesh upper for ultimate airflow. Designed for all-day wear, these shoes feature a responsive Max Air unit for superior cushioning, ensuring each step feels like walking on air. With their stylish design, they’re perfect for everything from casual outings to intense workouts, making them a versatile addition to any wardrobe. Step into style and comfort with the Nike Air Max Pulse."
    },
    
    {
        id: 2,
        img: "/b2.png",
        title: "Nike Air Max Pulse",
        title2: "Men's Shoes",
        price: "₹ 13,995",
        description: "Crafted for all-day wear, the Nike Air Max Pulse Men's Shoes offer superior comfort with a durable design. Featuring breathable mesh and a cushioned sole, these shoes are perfect for both casual outings and active lifestyles. Whether you're hitting the gym or running errands, the Nike Air Max Pulse ensures a supportive fit and a stylish look that stands out."
      },      
      {
        id: 3,
        img: "/b3.png",
        title: "Nike Air Max 97 SE",
        title2: "Men's Shoes",
        price: "₹ 13 995",
        description: "The Nike Air Max 97 SE Men's Shoes elevate the iconic silhouette with a modern twist. Featuring a sleek, breathable upper combined with reflective accents, these shoes deliver both style and functionality. The signature full-length Air cushioning offers superior comfort, while the durable rubber sole provides excellent traction, making these shoes perfect for both everyday wear and athletic activities."
      }
      ,
      {
        id: 4,
        img: "/b3.png",
        title: "Nike Air Max 97 SE",
        title2: "Men's Shoes",
        price: "₹ 13 995",
        description: "A timeless silhouette meets contemporary flair in the Nike Air Max 97 SE Men's Shoes. With its sleek, futuristic design, premium materials, and responsive Air cushioning, this iconic model ensures all-day comfort while making a bold statement in both style and performance. Whether you're hitting the streets or heading to the gym, the Nike Air Max 97 SE combines versatility and modern design, making it the perfect addition to any wardrobe."
       },
       {
        id: 5,
        img: "/b2.png",
        title: "Nike Air Max Pulse",
        title2: "Men's Shoes",
        price: "₹ 13,995",
        description: "The Nike Air Max Pulse Men's Shoes are expertly crafted for dynamic individuals who demand both style and performance. With responsive cushioning, a durable design, and a bold, attention-grabbing aesthetic, these shoes provide all-day comfort while turning heads with every step. Perfect for athletes and fashion-forward trendsetters alike, they combine cutting-edge technology with a striking look."
      },
      {
        id: 6,
        img: "/g1.png",
        title: "Nike Air Max Pulse",
        title2: "Women's Shoes",
        price: "₹ 13,995",
        description: "Elevate your look and step into a world of comfort with the Nike Air Max Pulse Women's Shoes. Designed with a focus on everyday wearability and performance, these shoes feature a vibrant colorway that adds a pop of personality. The responsive cushioning ensures comfort during long days, while the sleek design keeps you on-trend. Whether you're hitting the streets or hitting the gym, these shoes are a perfect fusion of function and flair."
      },      
      {
        id: 7,
        img: "/g2.png",
        title: "Nike Air Max Pulse",
        title2: "Men's Shoes",
        price: "₹ 13 995",
        description: "Built for both performance and style, the Nike Air Max Pulse Men's Shoes are designed to keep up with your active lifestyle. With cutting-edge Air Max cushioning, these shoes deliver maximum comfort and support, making them perfect for athletes and fashion enthusiasts alike. Whether you're hitting the gym or the streets, the Nike Air Max Pulse ensures you stand out in both performance and design."
    },
    {
        id: 8,
        img: "/g1.png",
        title: "Nike Air Max 97 SE",
        title2: "Men's Shoes",
        price: "₹ 13 995",
        description: "Step into a new era of innovation with the Nike Air Max 97 SE Men's Shoes. Featuring a sleek, futuristic design with a striking metallic finish, these shoes offer exceptional cushioning with Nike's signature Air Max technology. The bold design is paired with unmatched comfort, ensuring that every stride is as smooth as the first. Perfect for those who want to make a statement without compromising on comfort."
    },
    {
        id: 9,
        img: "/g2.png",
        title: "Nike Air Max 97 SE",
        title2: "Men's Shoes",
        price: "₹ 13 995",
        description: "A blend of style and substance, the Nike Air Max 97 SE Men's Shoes are the epitome of sleek sophistication. With premium materials and expert craftsmanship, these shoes provide unparalleled comfort while elevating your style. The iconic design, enhanced with Air Max technology, ensures a cushioned, responsive ride. Perfect for those who seek both elegance and performance in their footwear."
    },
    
    {
        id: 10,
        img: "/g3.png",
        title: "Nike Air Max Pulse",
        title2: "Women's Shoes",
        price: "₹ 13 995",
        description: "Featuring a modern design and plush cushioning, the Nike Air Max Pulse Women's Shoes are ideal for casual wear and light activities. With a breathable mesh upper and a responsive Air Max sole, these shoes provide all-day comfort and style, making them perfect for both everyday use and light fitness sessions."
    },
    {
        id: 11,
        img: "/g4.png",
        title: "Nike Air Max Pulse",
        title2: "Men's Shoes",
        price: "₹ 13 995",
        description: "Experience superior performance and a sleek aesthetic with the Nike Air Max Pulse Men's Shoes, designed to keep you comfortable throughout the day. The lightweight design, along with a cushioned midsole and durable rubber outsole, ensures a smooth ride, while the modern look makes them a versatile addition to any wardrobe."
    },
    {
        id: 12,
        img: "/g3.png",
        title: "Nike Air Max 97 SE",
        title2: "Men's Shoes",
        price: "₹ 13 995",
        description: "The Nike Air Max 97 SE Men's Shoes bring together innovative design and iconic style, making them a must-have for sneaker enthusiasts. With a full-length Air-Sole unit, these shoes offer maximum comfort and cushioning, while the smooth, reflective finish gives them a distinctive and stylish edge that stands out wherever you go."
    },
    {
        id: 13,
        img: "/g4.png",
        title: "Nike Air Max 97 SE",
        title2: "Men's Shoes",
        price: "₹ 13 995",
        description: "With its futuristic design and comfortable fit, the Nike Air Max 97 SE Men's Shoes are perfect for those who want to stand out. Featuring a unique wave-like design and a combination of leather and mesh materials, these shoes offer durability, support, and a premium look that seamlessly blends style with functionality."
    },    
    {
        id: 14,
        img: "/g4.png",
        title: "Nike Air Max Pulse",
        title2: "Men's Shoes",
        price: "₹ 13 995",
        description: "The Nike Air Max Pulse Men's Shoes are designed for maximum performance and comfort. Featuring advanced Air cushioning technology, they provide outstanding support for all-day wear while offering a bold and stylish look that elevates any outfit."
      },
      {
        id: 15,
        img: "/shoe1.png",
        title: "Nike Air Force 1 Mid '07",
        title2: "Men's Shoes",
        price: "₹ 10 995",
        description: "The Nike Air Force 1 Mid '07 Men's Shoes are an iconic addition to any collection. With a durable leather upper, signature mid-top design, and responsive Air cushioning, these shoes ensure all-day comfort and a timeless style that never goes out of fashion."
      },
      {
        id: 16,
        img: "/shoe2.png",
        title: "Nike Court Vision Low Next Nature",
        title2: "Men's Shoes",
        price: "₹ 4 995",
        description: "The Nike Court Vision Low Next Nature Men's Shoes bring sustainability to the forefront without compromising on style. Constructed with eco-friendly materials, they feature a classic court-inspired design that combines modern flair with environmental consciousness."
      },
      {
        id: 17,
        img: "/shoe3.png",
        title: "Nike Air Force 1 PLT.AF.ORM",
        title2: "Women's Shoes",
        price: "₹ 8 995",
        description: "The Nike Air Force 1 PLT.AF.ORM Women's Shoes redefine a classic design with updated features. Combining a stylish, elevated silhouette with premium materials, these shoes offer enhanced comfort and versatility, making them a must-have for anyone seeking both fashion and function."
      },
      {
        id: 18,
        img: "/shoe4.png",
        title: "Nike Air Force 1 React",
        title2: "Men's Shoes",
        price: "₹ 13 295",
        description: "Experience the perfect blend of bold design and unparalleled comfort with the Nike Air Force 1 React. This iconic sneaker features advanced React cushioning technology for superior support and a contemporary look that stands out in any crowd. Its sleek silhouette and versatile style make it a go-to choice for both casual outings and athletic activities, while ensuring all-day comfort with every step."
    },
    {
        id: 19,
        img: "/shoe5.png",
        title: "Air Jordan 1 Elevate Low",
        title2: "Women's Shoes",
        price: "₹ 11 895",
        description: "The Air Jordan 1 Elevate Low offers a fresh take on a classic design, combining sleek lines, a low-profile fit, and iconic Jordan branding. With its premium materials and standout style, this shoe adds a bold statement to your wardrobe. Its lightweight construction and cushioned sole ensure comfort while maintaining a timeless, versatile appeal for both casual and sporty looks."
    },
    {
        id: 20,
        img: "/shoe7.png",
        title: "Nike Court Vision Low",
        title2: "Men's Shoes",
        price: "₹ 5 695",
        description: "Retro hoops-inspired style meets everyday comfort in the Nike Court Vision Low. This sneaker celebrates basketball heritage with a durable leather upper, sleek design, and a modern twist. Perfect for casual wear or a sporty look, the Nike Court Vision Low ensures all-day comfort with its responsive cushioning, making it a versatile addition to any wardrobe."
    },
    {
        id: 21,
        img: "/p7.png",
        title: "Nike Pro Dri-FIT",
        title2: "Men's Tight-Fit Sleeveless Top",
        price: "MRP : ₹ 1 495.00",
        description: "Stay cool and dry during intense workouts with the Nike Pro Dri-FIT Sleeveless Top. Crafted from high-performance moisture-wicking fabric, this top offers a snug fit for maximum mobility and comfort. Designed to keep you dry and comfortable, it’s ideal for any high-energy activity, providing breathability and flexibility without compromising on style or performance."
    },
    {
        id: 22,
        img: "/shoe7.png",
        title: "Nike Dunk Low Retro SE",
        title2: "Men's Shoes",
        price: "₹ 9 695",
        description: "The Nike Dunk Low Retro SE brings a splash of color and nostalgia to your wardrobe. Featuring a premium leather upper and a timeless silhouette, it offers both style and durability. This sneaker combines vintage vibes with contemporary appeal, designed for versatility, whether you're hitting the streets or adding a pop of style to your everyday look. Its cushioned sole provides all-day comfort, making it the perfect choice for any occasion."
    },    
    {
        id: 23,
        img: "/shoe8.png",
        title: "Nike Air Max SC",
        title2: "Men's Shoes",
        price: "₹ 12 695",
        description: "Fusing classic Air Max style with modern comfort, the Nike Air Max SC delivers a lightweight feel and iconic cushioning for everyday wear, making it a versatile choice for both athletic activities and casual outings."
    },
    {
        id: 24,
        img: "/shoe9.png",
        title: "Nike Dunk Low Retro",
        title2: "Men's Shoes",
        price: "₹ 7 695",
        description: "With its sleek design and retro vibes, the Nike Dunk Low Retro is the perfect choice for those who appreciate heritage and contemporary flair in their sneakers. Its durable construction and iconic silhouette make it an essential for sneaker enthusiasts."
    },
    {
        id: 25,
        img: "/p1.png",
        title: "Nike Standard Issue",
        title2: "Women's Basketball Jersey",
        price: "MRP : ₹ 2 895.00",
        description: "Elevate your game with the Nike Standard Issue Basketball Jersey, crafted with lightweight and breathable materials to keep you comfortable on and off the court. Its stylish design and moisture-wicking technology ensure you stay cool under pressure."
    },
    {
        id: 26,
        img: "/shoe10.png",
        title: "Nike Air Max SC",
        title2: "Women's Shoes",
        price: "₹ 16 695",
        description: "The Nike Air Max SC blends sporty design with premium comfort, featuring a durable construction and Air Max cushioning for long-lasting wear. The stylish silhouette and reliable performance make these shoes a must-have for active women."
    },
    {
        id: 27,
        img: "/shoe9.png",
        title: "Nike Air Force 1 PLT.AF.ORM",
        title2: "Women's Shoes",
        price: "₹ 8 995",
        description: "Step into effortless style with the Nike Air Force 1 PLT.AF.ORM, a modern rework of the classic sneaker. Featuring a sleek and elevated design, this shoe is ideal for adding a touch of sophistication to any casual outfit."
    },    
    {
        id: 28,
        img: "/shoe5.png",
        title: "Nike Air Force 1 React",
        title2: "Men's Shoes",
        price: "₹ 13 295",
        description: "The Nike Air Force 1 React combines cutting-edge innovation with classic design. Featuring Nike's React technology, these shoes offer a softer, bouncier feel, providing all-day comfort. The sleek, timeless silhouette pays homage to the iconic Air Force 1, while the lightweight React sole adds a modern touch for superior cushioning and responsiveness."
      },
      {
        id: 29,
        img: "/p2.png",
        title: "Nike Dunk Low Retro SE",
        title2: "Men's Shoes",
        price: "MRP : ₹ 9 695.00",
        description: "A tribute to the golden era of basketball and streetwear, the Nike Dunk Low Retro SE is designed for sneakerheads and fashion-forward individuals. Crafted with premium materials, these shoes blend bold styling with a rich heritage. The low-profile silhouette ensures a comfortable fit, making them perfect for both casual wear and sporting activities."
      },
      {
        id: 30,
        img: "/p3.png",
        title: "Sustainable Materials",
        title2: "Nike Dri-FIT UV Hyverse",
        price: "MRP : ₹ 2 495.00",
        description: "The Nike Dri-FIT UV Hyverse is designed with sustainability in mind, featuring eco-friendly materials that are both functional and stylish. This versatile top offers superior sun protection and moisture-wicking properties, keeping you cool and dry during outdoor activities. Ideal for athletes and environmentally conscious consumers, it seamlessly combines performance with sustainability."
      },
      {
        id: 31,
        img: "/shoe4.png",
        title: "Air Jordan 1 Elevate Low",
        title2: "Women's Shoes",
        price: "₹ 11 895",
        description: "The Air Jordan 1 Elevate Low adds a touch of elevated style to your wardrobe. With a bold combination of iconic design elements and high-quality materials, these shoes deliver both comfort and a fashion-forward look. The low-top silhouette and modern details make them perfect for everyday wear, while the premium build ensures long-lasting durability and support."
      },
      {
        id: 32,
        img: "/p6.png",
        title: "Nike One Leak Protection: Period",
        title2: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
        price: "MRP : ₹ 3 395.00",
        description: "The Nike One Leak Protection Biker Shorts are engineered for women on the move. Featuring innovative leak protection technology, these shorts provide confidence and comfort throughout the day. The mid-rise design and secure fit ensure that you can perform at your best, whether you're working out or running errands, without compromising on style or comfort."
      },      
      {
        id: 33,
        img: "/p8.png",
        title: "Nike Dri-FIT UV Miler",
        title2: "Men's Short-Sleeve Running Top",
        price: "MRP : ₹ 1 695.00",
        description: "The Nike Dri-FIT UV Miler is crafted for runners who seek both comfort and protection. Its lightweight, breathable fabric wicks away sweat to keep you cool and dry. With UV protection, it ensures you're shielded from the sun's harmful rays, making it perfect for both short sprints and long-distance runs, no matter the weather."
    },
    {
        id: 34,
        img: "/p9.png",
        title: "Nike Alate All U",
        title2: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
        price: "MRP : ₹ 2 195.00",
        description: "The Nike Alate All U sports bra is designed to provide light support for low-impact activities like yoga or light walking. Made with soft, stretchy fabric, it features a comfortable U-neck design and lightly lined cups for added comfort and shape. The stylish printed pattern gives a trendy touch to your workout attire, ensuring both performance and style."
    },
    {
        id: 35,
        img: "/p10.png",
        title: "Nike Alate All U",
        title2: "Women's Medium-Support Padded Sports Bra Tank",
        price: "MRP : ₹ 3 095.00",
        description: "The Nike Alate All U padded sports bra tank offers medium support, making it ideal for a variety of activities, from gym workouts to casual outings. The sleek, body-hugging fit and breathable fabric keep you comfortable during intense workouts, while the built-in padding provides support and shape without compromising on comfort."
    },
    {
        id: 36,
        img: "/p11.png",
        title: "Nike Dri-FIT Run Division Rise 365",
        title2: "Men's Running Tank",
        price: "MRP : ₹ 3 495.00",
        description: "The Nike Dri-FIT Run Division Rise 365 tank top is built for serious runners. It combines moisture-wicking technology with a lightweight, breathable design to keep you cool during your runs. With a sleek and modern fit, this tank is not only functional but also stylish, allowing you to focus on your performance while looking sharp."
    },
    {
        id: 37,
        img: "/p12.png",
        title: "Nike Dri-FIT Challenger",
        title2: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
        price: "MRP : ₹ 2 495.00",
        description: "The Nike Dri-FIT Challenger shorts offer a 2-in-1 design that combines the best of both worlds: the inner shorts provide supportive coverage, while the outer layer allows for unrestricted movement. Ideal for a variety of workouts or casual wear, these shorts feature moisture-wicking fabric to keep you dry and comfortable throughout the day."
    },
    {
        id: 38,
        img: "/shoe14.png",
        title: "Nike Air Max SYSTM",
        title2: "Older Kids' Shoes",
        price: "MRP : ₹ 6 495.00",
        description: "The Nike Air Max SYSTM shoes offer a stylish retro design with modern-day comfort for active kids. Featuring the iconic Air Max cushioning system, these shoes provide excellent support and all-day comfort, making them perfect for kids on the go. The bold design ensures they stand out, while the durable construction ensures long-lasting wear."
    },
    {
        id: 39,
        img: "/p13.png",
        title: "Nike Outdoor Play",
        title2: "Older Kids' Oversized Woven Jacket",
        price: "MRP : ₹ 3 895.00",
        description: "The Nike Outdoor Play woven jacket is made for kids who love adventure. Its oversized fit ensures extra coverage and comfort, while the durable fabric provides protection from the elements. Ideal for outdoor activities, this jacket helps keep kids warm and dry without compromising on freedom of movement."
    },
    {
        id: 40,
        img: "/shoe11.png",
        title: "Nike Air Max SC",
        title2: "Women's Shoes",
        price: "MRP : ₹ 5 995.00",
        description: "The Nike Air Max SC combines sleek style with ultimate comfort. Designed for women, these shoes feature Air Max cushioning for all-day comfort and support, making them ideal for casual wear or light physical activities. With a stylish silhouette and soft cushioning, they offer a perfect blend of fashion and function."
    },    
    {
        id: 41,
        img: "/shoe12.png",
        title: "Nike Air Force 1 '07",
        title2: "Women's Shoes",
        price: "MRP : ₹ 8 195.00",
        description: "The Nike Air Force 1 '07 is a modern take on the iconic classic. With its durable leather upper and timeless design, these shoes are a staple for any wardrobe, offering both style and comfort. Whether you're pairing them with casual jeans or a sporty outfit, their versatility ensures they match any look."
      },
      {
        id: 42,
        img: "/shoe13.png",
        title: "Nike Court Vision Low",
        title2: "Men's Shoes",
        price: "MRP : ₹ 5 695.00",
        description: "Inspired by old-school basketball, the Nike Court Vision Low combines retro aesthetics with modern functionality. These shoes are a must-have for men seeking comfort and versatility in their footwear. The sleek design and cushioned sole make them ideal for both athletic and everyday wear, ensuring all-day comfort."
      },
      {
        id: 43,
        img: "/shoe15.png",
        title: "Nike SB Zoom Janoski OG+",
        title2: "Shoes",
        price: "MRP : ₹ 8 595.00",
        description: "The Nike SB Zoom Janoski OG+ shoes are crafted for skate enthusiasts. Their durable construction and responsive cushioning provide excellent support and control for every trick and turn. Designed with a premium suede upper and Zoom Air technology, these shoes offer a smooth ride on the board, while the iconic Janoski design adds a touch of style."
      },
      {
        id: 44,
        img: "/p14.png",
        title: "Nike Sportswear Trend",
        title2: "Older Kids' (Girls') High-waisted Woven Shorts",
        price: "MRP : ₹ 2 495.00",
        description: "The Nike Sportswear Trend high-waisted woven shorts are perfect for active girls. Lightweight and breathable, they ensure comfort during play while adding a trendy flair to any outfit. The elastic waistband offers a customizable fit, and the modern design makes them versatile enough for both casual and sporty occasions."
      },
      {
        id: 45,
        img: "/p5.png",
        title: "Nike Dri-FIT Ready",
        title2: "Men's Short-Sleeve Fitness Top",
        price: "MRP : ₹ 2 495.00",
        description: "Stay prepared for any workout with the Nike Dri-FIT Ready fitness top. Its sweat-wicking fabric and relaxed fit make it an essential piece for your training wardrobe. The lightweight material ensures breathability, while the stylish design provides comfort and flexibility for a wide range of activities."
      },
      {
        id: 46,
        img: "/shoe16.png",
        title: "Jordan Series ES",
        title2: "Men's Shoes",
        price: "MRP : ₹ 7 495.00",
        description: "The Jordan Series ES shoes pay homage to the legendary Michael Jordan. Featuring a sleek design and premium materials, they deliver unmatched comfort and a statement look for any occasion. With a high-performance sole and durable construction, these shoes provide both style and functionality for those who appreciate luxury and athleticism."
      },
      {
        id: 47,
        img: "/shoe17.png",
        title: "Nike Blazer Low '77 Jumbo",
        title2: "Women's Shoes",
        price: "MRP : ₹ 8 595.00",
        description: "The Nike Blazer Low '77 Jumbo shoes combine vintage vibes with modern updates. Their oversized details and durable construction make them a standout choice for women seeking style and performance. Featuring a soft leather upper and a cushioned insole, these shoes are as comfortable as they are fashionable."
      },
      {
        id: 48,
        img: "/shoe1.png",
        title: "Nike SB Force 58",
        title2: "Skate Shoe",
        price: "MRP : ₹ 5 995.00",
        description: "The Nike SB Force 58 skate shoes are built for durability and control. With their flexible design and grippy sole, they ensure optimal performance for skaters of all levels. The classic look is complemented by a responsive cushioning system that provides all-day comfort and support, making it a top choice for those who love to skate."
      }
      
  ] 