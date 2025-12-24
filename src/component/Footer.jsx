import FooterLogo from "../assets/footer_logo.svg"
const Footer = () => {
  return(
    <>
      <footer>
        <div className="inner">
          <div className="f-logo">
            <img src={FooterLogo} alt="로고" />
          </div>

          <address>
            <span>(주)놀유니버스</span>
            <span>대표이사: 배보찬</span>
            <span>사업자 등록번호: 824-81-02515</span>
            <span>통신판매업신고:2024-성남수정-0912</span>
            <span className="no-line">메일: help@nol.com</span>
            <span>관광사업자 등록번호: 제2024-000024호</span>
            <span>주소: 경기도 성남시 수정구 금토로 70 (금토동, 텐엑스타워)</span>
            <span className="no-line">호스팅 서비스 제공자: (주)놀유니버스</span>
            <span className="no-line">고객센터: 1644-1346 (오전 9시 - 익일 새벽 3시)</span>
          </address>

          <div className="f-link">
            <a href="#">회사소개</a>
            <a href="#">인재채용</a>
            <a href="#">개인정보처리방침</a>
            <a href="#">서비스이용약관</a>
            <a href="#">광고제휴문의</a>
          </div>

          <div className="copy">
            &copy; Nol Universe Co., Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer;