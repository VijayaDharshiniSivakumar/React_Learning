import React from 'react';
import './Menu.css';
const availableCakes = [
  {
    name: 'Chocolate Cake',
    description: 'Rich and moist chocolate cake with a creamy chocolate ganache.',
    price: '$25',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSbBbFkN991MVJdSd7EafehXTSLTX5I00175KPv3NKQ2GUFW9XptuhCytv3ytaV-46pxK-0d3CcrxkwgxBh-BzHtNDNAlS8m3ZXqM7fgDFu',
  },
  {
    name: 'Vanilla Cake',
    description: 'Classic vanilla cake with vanilla buttercream frosting.',
    price: '$20',
    image: 'https://assets.flowersnfruits.com/uploads/product-pics/1687851990_8721.png',
  },
  {
    name: 'Red Velvet Cake',
    description: 'Delicious red velvet cake with cream cheese frosting.',
    price: '$30',
    image: 'https://mrbrownbakery.com/image/images/UpnLpYm9QzctkR5P7WfFOEpPIoAt3zeGSlIHnSkj.jpeg?p=med',
  },
  {
    name: 'Carrot Cake',
    description: 'Spiced carrot cake with a tangy cream cheese frosting.',
    price: '$28',
    image: 'https://joyfoodsunshine.com/wp-content/uploads/2022/02/best-carrot-cake-recipe-9.jpg',
  },
  {
    name: 'Cheesecake',
    description: 'Creamy cheesecake with a graham cracker crust and fresh berries.',
    price: '$35',
    image: 'https://www.cakebox.com/media/catalog/product/cache/8d172b4d9f6309ed990850610624324e/c/h/ch028.jpg',
  },
  {
    name: 'Lemon Cake',
    description: 'Light and fluffy lemon cake with a tangy lemon glaze.',
    price: '$22',
    image: 'https://www.supergoldenbakes.com/wordpress/wp-content/uploads/2022/03/Lemon_Cake-1-6-500x500.jpg',
  },
  {
    name: 'Black Forest Cake',
    description: 'Chocolate cake layered with cherries and whipped cream.',
    price: '$40',
    image: 'https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-thumb.jpg',
  },
  {
    name: 'Strawberry Shortcake',
    description: 'Classic strawberry shortcake with fresh strawberries and whipped cream.',
    price: '$27',
    image: 'https://sugarspunrun.com/wp-content/uploads/2024/02/Strawberry-shortcake-cake-1-of-1.jpg',
  },
  {
    name: 'Pineapple Upside Down Cake',
    description: 'Moist cake topped with caramelized pineapple and cherries.',
    price: '$25',
    image: 'https://amandascookin.com/wp-content/uploads/2021/10/Mini-Pineapple-Upside-Down-Cake-RC-SQ.jpg',
  },
  {
    name: 'Chocolate Lava Cake',
    description: 'Decadent chocolate cake with a gooey molten center.',
    price: '$32',
    image: 'https://www.barleyandsage.com/wp-content/uploads/2024/01/chocolate-lava-cakes-1200x1200-1.jpg',
  },
]; 
const customCakes = [
  {
    name: 'Photo cakes',
    description: 'Rich and moist chocolate cake with a creamy chocolate ganache.',
    price: '$25',
    image: 'https://www.fnp.com/images/pr/m/v200/bond-of-love-photo-cake-half-kg.jpg',
  },
  {
    name: 'Mini Cakes',
    description: 'Classic vanilla cake with vanilla buttercream frosting.',
    price: '$20',
    image: 'https://mrbrownbakery.com/image/images/ZXBYj3FE4HDgzib31qEkBOxGpcH60OkwWu6GoDsI.jpeg?p=large',
  },
  {
    name: 'QR Cakes',
    description: 'Delicious red velvet cake with cream cheese frosting.',
    price: '$30',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlI_S_I-v8TQ7khw_SUM7EOVaujnjrU3mvYQ&s',
  },
  {
    name: 'Pinnata Cakes',
    description: 'Spiced carrot cake with a tangy cream cheese frosting.',
    price: '$28',
    image: 'https://luvflowercake.com/wp-content/uploads/2021/10/50369_chocolate-heart-pinata-cake.jpeg',
  },
  {
    name: 'Gender Reveal cakes',
    description: 'Creamy cheesecake with a graham cracker crust and fresh berries.',
    price: '$35',
    image: 'https://d2sbytayo4rkgk.cloudfront.net/eyJidWNrZXQiOiJwcm9kLWZlcmd1c29ucGxhcnJlLWFzc2V0cyIsImtleSI6ImNhdGFsb2cvcHJvZHVjdC9vL2gvb2hfYmFieV9idWJibGVzX2NlbGVicmF0aW9uX2Nha2UuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=',
  },

];  
const themedCakes = [
  
  {
    name: 'Event Cakes',
    description: 'Spiced carrot cake with a tangy cream cheese frosting.',
    price: '$28',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHnAr6lJOtgh6AY46VAr1e6e_Y_KooH3gzhw&s',
  },
  {
    name: 'First Birthday Cakes',
    description: 'Creamy cheesecake with a graham cracker crust and fresh berries.',
    price: '$35',
    image: 'https://shop.cakesalltheway.com/cdn/shop/files/JungleSafari_ab1d796f-5931-4a62-b9e5-f705085f1dc6.jpg?v=1704716742',
  },
  {
    name: 'Awareness Cakes',
    description: 'Light and fluffy lemon cake with a tangy lemon glaze.',
    price: '$22',
    image: 'https://i.pinimg.com/originals/ba/74/71/ba74719ecce3710854749537bc538df6.jpg',
  },
  {
    name: 'Food Themed Cakes',
    description: 'Chocolate cake layered with cherries and whipped cream.',
    price: '$40',
    image: 'https://www.myumcakes.com/wp-content/uploads/2023/12/bastami-rice-biryani-food-themes-customized-cake-designs-in-coimbatore.jpg',
  },
  {
    name: 'Valentine Cakes',
    description: 'Classic strawberry shortcake with fresh strawberries and whipped cream.',
    price: '$27',
    image: 'https://giftnmore.in/wp-content/uploads/2022/04/16595.jpg',
  },
]; 


const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menu-title">Our Menu</h1>
      
      <section className="menu-section">
        <h2 className="menu-section-title">Available Cakes</h2>
        <div className="menu-items">
          {availableCakes.map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <div className="menu-details">
                <h2 className="menu-name">{item.name}</h2>
                <p className="menu-description">{item.description}</p>
                <p className="menu-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="menu-section">
        <h2 className="menu-section-title">Custom Cakes</h2>
        <div className="menu-items">
          {customCakes.map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <div className="menu-details">
                <h2 className="menu-name">{item.name}</h2>
                <p className="menu-description">{item.description}</p>
                <p className="menu-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="menu-section">
        <h2 className="menu-section-title">Themed Cakes</h2>
        <div className="menu-items">
          {themedCakes.map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <div className="menu-details">
                <h2 className="menu-name">{item.name}</h2>
                <p className="menu-description">{item.description}</p>
                <p className="menu-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
