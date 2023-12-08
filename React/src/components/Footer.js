
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer>
      <div>
            <a class="pagelink" href="https://www.example.com">[home]</a>
            <a class="pagelink" href="pages/sounds.html">sounds</a>
            <a class="pagelink" href="pages/visuals.html">visuals</a>
            <a class="pagelink" href="pages/bookshelf.html">bookshelf</a>
            <a class="pagelink" href="pages/space.html">space</a>
            <a class="pagelink" href="pages/portals.html">links</a>
        </div>
        <a href="https://webring.xxiivv.com/#your-id-here" target="_blank" rel="noopener">
            <img src="https://webring.xxiivv.com/icon.black.svg" alt="XXIIVV webring" />
        </a>
      </footer>
      
    </div>
  );
};

export default Footer;

