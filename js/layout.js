/* =============================================
   SPTX - Layout Injector (Nav + Footer)
   ============================================= */

const SPTX_NAV = `
<nav id="navbar" class="solid">
  <div class="nav-wrap">
    <a href="/" class="nav-logo">
      <img src="/images/logo_en.png" alt="SPTX" onerror="this.style.display='none';this.nextElementSibling.style.display='inline'">
      <span class="logo-text" style="display:none"><span style="color:#5ab3e8">SPT</span><span class="x">X</span></span>
    </a>
    <div class="hamburger" onclick="toggleMenu()" id="ham">
      <span></span><span></span><span></span>
    </div>
    <ul class="nav-menu" id="navMenu">
      <li id="nav-home"><a href="/">หน้าแรก</a></li>
      <li class="dropdown" id="nav-about">
        <a href="/about/" class="drop-arrow">รู้จักเรา</a>
        <ul class="dropdown-menu">
          <li><a href="/about/">เกี่ยวกับบริษัท</a></li>
          <li><a href="/about/vision.html">วิสัยทัศน์และพันธกิจ</a></li>
          <li><a href="/about/board.html">คณะกรรมการบริษัท</a></li>
          <li><a href="/about/audit-committee.html">คณะกรรมการตรวจสอบ</a></li>
          <li><a href="/about/nomination-committee.html">คณะกรรมการสรรหาและพิจารณาค่าตอบแทน</a></li>
          <li><a href="/about/executive-board.html">คณะกรรมการบริหาร</a></li>
          <li><a href="/about/org.html">โครงสร้างองค์กร</a></li>
        </ul>
      </li>
      <li id="nav-services"><a href="/services/">ธุรกิจของเรา</a></li>
      <li class="dropdown" id="nav-ir">
        <a href="/ir/" class="drop-arrow">นักลงทุนสัมพันธ์</a>
        <ul class="dropdown-menu">
          <li><a href="/ir/">ข้อมูลสำหรับนักลงทุน</a></li>
          <li class="dd-group">ข้อมูลสำหรับผู้ถือหุ้น</li>
          <li><a href="/ir/shareholder-structure.html">โครงสร้างผู้ถือหุ้น</a></li>
          <li><a href="/ir/agm.html">การประชุมสามัญผู้ถือหุ้น</a></li>
          <li><a href="/ir/egm.html">การประชุมวิสามัญผู้ถือหุ้น</a></li>
          <li><a href="/ir/meeting-minutes.html">รายงานการประชุม</a></li>
          <li><a href="/ir/agenda-proposal.html">การเสนอวาระ / เสนอชื่อกรรมการ</a></li>
          <li><a href="/ir/dividend.html">การจ่ายปันผล</a></li>
          <li><a href="/ir/annual-report.html">56-1 One Report และรายงานประจำปี</a></li>
          <li><a href="/ir/form56-1.html">แบบ 56-1</a></li>
          <li><a href="/ir/financial.html">งบการเงิน</a></li>
          <li><a href="/ir/set-news.html">ข่าวแจ้งตลาดหลักทรัพย์</a></li>
          <li><a href="/ir/stock.html">ข้อมูลหลักทรัพย์ SPTX</a></li>
          <li><a href="/ir/documents.html">เอกสาร / แบบฟอร์ม</a></li>
        </ul>
      </li>
      <li id="nav-news"><a href="/news.html">ข่าวสาร</a></li>
      <li id="nav-contact"><a href="/contact.html">ติดต่อเรา</a></li>
    </ul>
  </div>
</nav>`;

const SPTX_FOOTER = `
<footer id="footer">
  <div class="container">
    <div class="footer-aqua">
      <div class="footer-left">
        <img src="/images/logo_en.png" alt="SPTX" class="footer-logo" onerror="this.style.display='none';this.nextElementSibling.style.display='inline-block'">
        <span class="footer-logo-text" style="display:none"><span style="color:#5ab3e8">SPT</span><span class="x">X</span></span>
        <div class="footer-addr">
          944 สามย่านมิตรทาวน์ ชั้น 28 ถ.พระราม 4 ปทุมวัน กรุงเทพฯ 10330<br>
          โทร <a href="tel:022738351">0-2273-8351</a> &nbsp;|&nbsp; <a href="mailto:ir@sptx.co.th">ir@sptx.co.th</a>
        </div>
      </div>
      <div class="footer-copy">
        Copyright &copy; บริษัท เอสพีที เอกซ์ จำกัด (มหาชน)
      </div>
    </div>
  </div>
</footer>
<div id="btt" onclick="window.scrollTo({top:0,behavior:'smooth'})"><i class="fa-solid fa-chevron-up"></i></div>`;

// Inject nav + footer
document.getElementById('nav-root').innerHTML = SPTX_NAV;
document.getElementById('footer-root').innerHTML = SPTX_FOOTER;

// Highlight active nav item (works with subfolder structure)
(function(){
  const parts = location.pathname.split('/').filter(Boolean);
  const page  = parts[parts.length - 1] || '';   // filename, or '' for folder index
  const folder = parts[parts.length - 2] || '';  // parent folder

  // folder-level index pages
  const folderMap = { 'about':'nav-about', 'ir':'nav-ir', 'services':'nav-services' };
  // individual pages by filename
  const pageMap = {
    '':'nav-home','index.html':'nav-home',
    'vision.html':'nav-about','board.html':'nav-about',
    'audit-committee.html':'nav-about','nomination-committee.html':'nav-about',
    'executive-board.html':'nav-about','org.html':'nav-about',
    'annual-report.html':'nav-ir','financial.html':'nav-ir',
    'set-news.html':'nav-ir','stock.html':'nav-ir','dividend.html':'nav-ir','documents.html':'nav-ir',
    'shareholder-structure.html':'nav-ir','agm.html':'nav-ir','egm.html':'nav-ir',
    'meeting-minutes.html':'nav-ir','agenda-proposal.html':'nav-ir','form56-1.html':'nav-ir',
    'news.html':'nav-news',
    'contact.html':'nav-contact'
  };

  // If current page is an index inside a folder, use folder map
  const id = (page === '' || page === 'index.html') && folder
    ? (folderMap[folder] || 'nav-home')
    : (pageMap[page] || '');

  if(id){ const el = document.getElementById(id); if(el) el.classList.add('active'); }
})();
