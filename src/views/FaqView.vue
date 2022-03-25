<template>
<Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="container-fluid mt-3 p-0">
    <div
      class="d-flex align-items-center justify-content-center headPic-faq"
    >
      <span class="head-title">FAQ</span>
    </div>
  </div>
  <div class="container mt-7 mb-5">
    <div class="row px-1 px-lg-7 mb-5">
      <h2>商品購物須知</h2>
      <div class="accordion" id="accordionExampleA">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne1">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne1"
              aria-expanded="true"
              aria-controls="collapseOne1"
            >
              收到商品後，我需要注意什麼事項，以確保我的購物權益呢？
            </button>
          </h2>
          <div
            id="collapseOne1"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne1"
            data-bs-parent="#accordionExampleA"
          >
            <div class="accordion-body">
              Moment
              包裝出貨已全程攝影，在您收到訂購商品時，我們隨貨為您附上了「商品明細表」，為確保消費者權益，
              請您於開啟商品外箱時全程攝影，依表核對包裝箱內的商品內容，若有不符或短少，請於24小時內於網頁
              「聯絡客服」中反應，由網路客服人員為您服務，我們將為您作紀錄並進行處理。商品明細表為退換貨憑證
              之一，請您在10天猶豫期內，妥善保管勿毀損丟棄。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              如我收到商品有缺件，應該如何處理？
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              若您發現商品有短缺的現象，請您點擊「Contact」與我們聯絡。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              請問 Moment 網路商品售後服務方式？
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              您可以於網頁點選「Contact」中點選所要反應的商品並將反應事項陳述及表明需求。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row px-1 px-lg-7 mb-5">
      <h2>查詢配送/回收</h2>
      <div class="accordion" id="accordionExample1">
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading11">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse11"
              aria-expanded="true"
              aria-controls="collapse11"
            >
              我要如何查詢配送進度？
            </button>
          </h2>
          <div
            id="collapse11"
            class="accordion-collapse collapse show"
            aria-labelledby="heading11"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              您於登入會員後，至『我的帳戶』→『訂單管理』查詢配送狀況，訂單狀態：配送中-表示已通知廠商出貨；已配送-表示廠商已送交郵局或貨運寄送
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading12">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse12"
              aria-expanded="false"
              aria-controls="collapse12"
            >
              我可以指定送貨地點嗎？
            </button>
          </h2>
          <div
            id="collapse12"
            class="accordion-collapse collapse"
            aria-labelledby="heading12"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              您可以在填寫訂單資料時的收件人欄位，輸入您指定的送貨地址，有「速」標誌的商品皆可離島地區配送，(另有材積及重量限制)
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading14">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse14"
              aria-expanded="false"
              aria-controls="collapse14"
            >
              請問可以離島配送嗎?
            </button>
          </h2>
          <div
            id="collapse14"
            class="accordion-collapse collapse"
            aria-labelledby="heading14"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              有「速」標誌商品皆可離島全區配送，單一商品材積限制：長+寬+高需低於120公分;
              單一商品重量限制：需低於20公斤; 運費：每張訂單加收運費90元;
              配送時間：約3個工作天。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading15">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse15"
              aria-expanded="false"
              aria-controls="collapse15"
            >
              請問送貨地址可指定郵政信箱嗎？
            </button>
          </h2>
          <div
            id="collapse15"
            class="accordion-collapse collapse"
            aria-labelledby="heading15"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              目前商品的配(寄)送需有指定收貨地址，故無法指定郵政信箱為配送地。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading16">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse16"
              aria-expanded="false"
              aria-controls="collapse16"
            >
              請問配合的宅配公司是哪一家？
            </button>
          </h2>
          <div
            id="collapse16"
            class="accordion-collapse collapse"
            aria-labelledby="heading16"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              視商品及配送區域之因素，提供不同配送方式,例如『台灣宅配通』、『黑貓宅急便』、『新竹貨運』、『中華郵政』等各家物流業者，商品皆以出貨單位配合物流業者為主，恕無法挑選特定物流業者。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading17">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse17"
              aria-expanded="false"
              aria-controls="collapse17"
            >
              我在購物網確認訂單後，多久可以收到商品呢？
            </button>
          </h2>
          <div
            id="collapse17"
            class="accordion-collapse collapse"
            aria-labelledby="heading17"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              除特殊原因外（預購、特別訂製商品除外），一般在訂單確認後五天內(不含例假日)將貨品運送到指定地點。您可在momo購物網「我的帳戶」內，查詢您最近訂購商品的送貨狀態(配送中-表示已通知廠商出貨；已配送-表示廠商已送交郵局或貨運寄送)。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading18">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse18"
              aria-expanded="false"
              aria-controls="collapse18"
            >
              訂單已超過配送時間為何還沒收到商品？
            </button>
          </h2>
          <div
            id="collapse18"
            class="accordion-collapse collapse"
            aria-labelledby="heading18"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              請您至「客服中心」與我們聯絡，我們將儘速為您查詢商品流向。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row px-1 px-lg-7 mb-5">
      <h2>訂單資料異動</h2>
      <div class="accordion" id="accordionExample3">
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading31">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse31"
              aria-expanded="true"
              aria-controls="collapse31"
            >
              我可以在訂單成立後，要求更改訂購數量嗎？
            </button>
          </h2>
          <div
            id="collapse31"
            class="accordion-collapse collapse show"
            aria-labelledby="heading31"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              訂單成立後無法更改訂購數量，如需增加訂購品項，請您重新下單選購，再將原訂單辦理退貨即可。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading32">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse32"
              aria-expanded="false"
              aria-controls="collapse32"
            >
              我要如何進行換貨？
            </button>
          </h2>
          <div
            id="collapse32"
            class="accordion-collapse collapse"
            aria-labelledby="heading32"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              若您的商品需辦理換貨服務，請您至「客服中心」與我們聯絡。(請備註方便換貨地址、收件人及電話，後續將協助儘速為您處理。)
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading33">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse33"
              aria-expanded="false"
              aria-controls="collapse33"
            >
              我如何能確保收到的商品就是我當初所訂購的商品內容？
            </button>
          </h2>
          <div
            id="collapse33"
            class="accordion-collapse collapse"
            aria-labelledby="heading33"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              在您收到訂購商品時，我們隨貨為您附上了「商品明細表」，請您依表核對包裝箱內的商品內容，若有不符或短少，為確保您的權益請於24小時內來電客服中心，我們將即刻為您作紀錄並進行處理。商品明細表為退換貨憑證之一，請您在天猶豫期內，妥善保管勿毀損丟棄。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row px-1 px-lg-7 mb-5">
      <h2>網站操作方式</h2>
      <div class="accordion" id="accordionExample4">
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading41">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse41"
              aria-expanded="true"
              aria-controls="collapse41"
            >
              為什麼我無法瀏覽網頁、無法購買、圖文無法顯示、網頁連結錯誤？？
            </button>
          </h2>
          <div
            id="collapse41"
            class="accordion-collapse collapse show"
            aria-labelledby="heading41"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              適用的作業系統：Windows XP/ Windows NT、Windows2000/ Windows
              ME、Windows98。 適用的瀏覽器： chrome 1.0以上、Firefox
              8.0以上、Edge 12.0以上、Safari 4.0以上。網路連線：建議使用512K/
              64K以上ADSL。電腦的配備： 電腦主機：Pentium
              lll以上300MHz以上，或其他0％相容機種，記憶容量：建議使用128MB以上，硬碟空間：程式本體約需250MB，為確保瀏覽順暢，請確認有250MB以上空間
              顯示模式：支援DirectX之3D顯示卡，並內建16MB以上之VRAM。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading43">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse43"
              aria-expanded="false"
              aria-controls="collapse43"
            >
              我如何能確保收到的商品就是我當初所訂購的商品內容？
            </button>
          </h2>
          <div
            id="collapse43"
            class="accordion-collapse collapse"
            aria-labelledby="heading43"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              『我的帳戶』內包含了客戶資料修改、密碼修改、訂單查詢、紅利金管理、暫收款管理、折價券管理、中獎記錄、追蹤清單，利用以上的介面可查詢到個人的訂購狀況。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    loading () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  },
  mounted () {
    window.scroll(0, 0)
    this.loading()
  }
}
</script>
