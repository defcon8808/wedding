<template>
  <div
      class="address-wrap"
      :class="{ 'animate-visible': isVisible }"
      ref="address"
  >

    <div class="address-main-font">
      <p>Address</p>
    </div>

    <div class="address-map">
      <div id="map" ref="map" style="width: 100%; height: 245px;"></div>
    </div>

    <div class="address-directions">
      <div class="address-item">
        <p><strong>지하철</strong></p>
        <span>1호선 용산역 3번 출구에서 도보로 5분 거리입니다.</span>
      </div>

      <div class="address-item">
        <p><strong>버스</strong></p>
        <span>용산구청 앞 정류장에서 1500번 버스를 타고 로얄파크컨벤션 하차.</span>
      </div>

      <div class="address-item">
        <p><strong>내비게이션</strong></p>
        <span>내비게이션에 " 로얄파크컨벤션 " 을 검색 후 길 안내를 받으세요.</span>
      </div>
    </div>

    <!-- 내비게이션 버튼을 마크업에서 미리 정의 -->
    <div class="address-nav-wrap">
      <div class="kakao-wrap">
        <div class="google-main">
          <button @click="startNavigation('google')">구글길안내</button>
          <a @click="startNavigation('google')">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <path fill="#1e4384" d="M17.163,35.679c1.41,1.525,2.801,4.085,3.487,6.045c0.345,0.986,0.723,2.275,1.324,3.269	c0.54,0.894,1.886,1.015,2.548,0.207c0.373-0.456,0.865-1.483,0.98-1.77c1.529-3.792,2.202-5.688,5.993-10.397	c2.198-2.73,4.25-6.208,5.461-9.497c1.211-3.289,1.798-6.891,1.074-10.321c-0.682-3.232-2.546-6.202-5.159-8.222	C28.418,1.551,22,1.125,16.874,3.452C15.494,4.078,14.182,4.897,13.142,6c-1.591,1.689-3.444,4.073-4.092,6.301	c-0.638,2.195-0.856,4.281-0.55,6.972c0.376,3.313,1.771,6.178,3.27,9.156c1.546,3.071,3.049,4.69,5.375,7.222"></path><path fill="#febf10" d="M12.334,29.449c0.728,1.488,3.903,5.325,3.903,5.325l10.75-12.866c0,0-2.481,1.29-4.928,0.331	s-4.068-2.977-4.101-6.913L9.89,24.867L12.334,29.449z"></path><path fill="#4b7bb2" d="M32.33,4.422c2.033,1.818,4.875,5.742,5.023,6.112l-8.367,9.375c0,0,0.237-2.999-0.324-4.013	s-1.165-2.816-2.763-3.509c-1.598-0.694-4.825-0.694-6.242,0.181l8.717-9.849C28.374,2.719,31.197,3.409,32.33,4.422z"></path><path fill="#38b47b" d="M36.956,23.536c1.211-3.289,1.798-6.891,1.074-10.321c-0.185-0.878-0.465-1.734-0.816-2.559	l-0.229-0.04c-2.256,1.919-3.736,4.037-5.649,6.36c-1.02,1.239-1.937,2.718-3.088,3.837c-3.028,2.943-4.938,5.473-7.715,8.655	c-1.273,1.459-2.654,3.285-4.14,5.101l-0.051,0.206c0.257,0.282,0.523,0.572,0.803,0.876l0.018,0.029	c1.409,1.525,2.801,4.085,3.487,6.045c0.345,0.986,0.723,2.275,1.324,3.269c0.54,0.894,1.886,1.015,2.548,0.207	c0.373-0.456,0.865-1.483,0.98-1.77c1.529-3.792,2.202-5.688,5.993-10.397C33.693,30.304,35.745,26.826,36.956,23.536z"></path><path fill="#ef4754" d="M11.695,8.179L11.44,7.996c-1.037,1.346-1.969,2.858-2.389,4.306	c-0.638,2.195-0.856,4.281-0.55,6.972c0.22,1.938,0.794,3.722,1.529,5.466l0.231,0.125c0.733-1.163,1.392-1.826,2.724-3.425	c0.46-0.552,2.53-2.9,2.842-3.346c1.036-1.48,1.874-2.615,2.686-3.998C16.259,12.39,13.95,9.51,11.695,8.179z"></path><path fill="#d6e5e5" d="M22.905,11.817c-2.129,0.045-4.074,1.136-4.676,2.968c-0.603,1.832-0.031,3.902,1.104,5.461	c0.683,0.939,1.587,1.747,2.675,2.153c2.113,0.788,4.675-0.185,5.913-2.069c1.238-1.884,1.521-3.377,0.386-5.325	c-0.294-0.505-0.761-1.385-1.483-2.029c-0.425-0.379-1.122-0.756-1.678-0.878c-0.652-0.144-1.386-0.338-2.24-0.301"></path><path fill="#010101" d="M23.341,46.241c-0.05,0-0.101-0.002-0.151-0.006c-0.687-0.049-1.301-0.416-1.644-0.983	c-0.523-0.866-0.874-1.905-1.183-2.822l-0.185-0.541c-0.734-2.096-2.126-4.51-3.383-5.869c-0.02-0.021-0.037-0.044-0.052-0.067	l-0.056-0.06c-2.292-2.496-3.807-4.145-5.364-7.238c-1.369-2.719-2.92-5.802-3.321-9.324c-0.298-2.627-0.129-4.771,0.567-7.168	c0.745-2.562,2.956-5.176,4.208-6.505c0.979-1.039,2.288-1.934,3.889-2.66c5.441-2.47,12.076-1.827,16.51,1.602	c2.693,2.08,4.641,5.184,5.343,8.514c0.68,3.214,0.312,6.779-1.095,10.597c-1.188,3.229-3.208,6.741-5.54,9.639	c-3.573,4.437-4.334,6.329-5.715,9.764l-0.204,0.507c-0.106,0.263-0.619,1.363-1.058,1.898	C24.532,45.977,23.955,46.241,23.341,46.241z M17.564,35.378c1.55,1.693,2.929,4.385,3.558,6.181l0.188,0.552	c0.293,0.868,0.625,1.853,1.091,2.624c0.175,0.29,0.496,0.478,0.858,0.504c0.354,0.025,0.669-0.104,0.875-0.354	c0.311-0.381,0.78-1.334,0.903-1.64l0.204-0.506c1.417-3.523,2.197-5.465,5.863-10.018c2.268-2.816,4.229-6.227,5.382-9.357	c1.339-3.638,1.693-7.017,1.054-10.044c-0.654-3.102-2.468-5.992-4.976-7.93c-4.151-3.208-10.374-3.803-15.484-1.482	c-1.482,0.673-2.686,1.492-3.574,2.436c-1.19,1.264-3.289,3.737-3.976,6.099c-0.657,2.262-0.817,4.288-0.534,6.775	c0.381,3.346,1.889,6.344,3.22,8.988c1.495,2.969,2.973,4.577,5.209,7.011l0.088,0.097C17.533,35.333,17.55,35.354,17.564,35.378z"></path><path fill="#010101" d="M23.583,23.178c-0.595,0-1.188-0.1-1.75-0.31c-1.086-0.404-2.091-1.209-2.905-2.327	c-1.346-1.849-1.784-4.06-1.174-5.912c0.631-1.921,2.582-3.207,4.993-3.307c0.043-0.015,0.089-0.022,0.136-0.025	c0.84-0.03,1.535,0.125,2.157,0.265l0.212,0.048c0.618,0.137,1.4,0.545,1.903,0.992c0.71,0.635,1.18,1.451,1.49,1.991l0.092,0.16	c1.15,1.975,1.034,3.67-0.399,5.852C27.272,22.227,25.417,23.178,23.583,23.178z M23.06,12.293	c-0.046,0.015-0.094,0.023-0.145,0.024c-2.017,0.042-3.709,1.097-4.212,2.624c-0.502,1.525-0.106,3.445,1.033,5.012	c0.698,0.958,1.544,1.642,2.446,1.978c1.84,0.688,4.179-0.137,5.319-1.875c1.24-1.886,1.337-3.142,0.372-4.799l-0.096-0.166	c-0.278-0.484-0.699-1.217-1.288-1.742c-0.376-0.334-1.001-0.662-1.454-0.763l-0.216-0.049C24.27,12.413,23.744,12.308,23.06,12.293	z"></path><path fill="#010101" d="M16.395,35.068c-0.111,0-0.224-0.037-0.316-0.113c-0.214-0.175-0.245-0.489-0.07-0.703	c0.562-0.688,1.11-1.378,1.644-2.049c0.879-1.106,1.709-2.151,2.506-3.064c0.808-0.925,1.542-1.795,2.251-2.636	c1.712-2.029,3.329-3.946,5.492-6.049c0.708-0.688,1.343-1.544,1.957-2.371c0.361-0.488,0.721-0.972,1.094-1.425	c0.426-0.517,0.83-1.024,1.227-1.521c1.387-1.738,2.696-3.38,4.484-4.901c0.211-0.178,0.525-0.154,0.705,0.057	c0.179,0.211,0.153,0.526-0.057,0.705c-1.715,1.459-2.995,3.063-4.351,4.764c-0.399,0.501-0.808,1.012-1.237,1.533	c-0.362,0.44-0.711,0.911-1.062,1.385c-0.638,0.859-1.297,1.749-2.062,2.492c-2.128,2.068-3.729,3.967-5.425,5.977	c-0.713,0.845-1.45,1.72-2.262,2.649c-0.782,0.896-1.605,1.932-2.477,3.028c-0.536,0.674-1.087,1.368-1.653,2.06	C16.683,35.006,16.539,35.068,16.395,35.068z"></path><path fill="#010101" d="M10.26,25.365c-0.092,0-0.184-0.024-0.267-0.077c-0.233-0.146-0.304-0.456-0.156-0.689	c0.558-0.886,1.066-1.481,1.836-2.383c0.271-0.318,0.576-0.675,0.928-1.097c0.152-0.183,0.479-0.561,0.861-1.002	c0.701-0.809,1.76-2.031,1.954-2.31l0.552-0.783c0.694-0.983,1.305-1.849,1.889-2.806c-0.874-0.704-1.754-1.558-2.608-2.387	c-1.264-1.225-2.569-2.492-3.807-3.223c-0.238-0.141-0.317-0.447-0.177-0.685c0.142-0.238,0.449-0.316,0.685-0.177	c1.341,0.792,2.689,2.101,3.995,3.366c0.948,0.92,1.929,1.872,2.869,2.584c0.202,0.153,0.258,0.433,0.13,0.651	c-0.674,1.148-1.362,2.123-2.159,3.252l-0.549,0.779c-0.207,0.297-1.001,1.218-2.018,2.392c-0.377,0.435-0.699,0.808-0.85,0.987	c-0.354,0.425-0.661,0.785-0.935,1.105c-0.741,0.868-1.231,1.442-1.751,2.267C10.588,25.282,10.426,25.365,10.26,25.365z"></path><path fill="#010101" d="M18.824,14.188c-0.12,0-0.24-0.043-0.336-0.13c-0.204-0.185-0.22-0.501-0.034-0.706	c0.714-0.788,1.432-1.607,2.106-2.379c0.724-0.827,1.399-1.599,1.973-2.219c0.835-0.904,1.485-1.811,2.115-2.687	c0.886-1.232,1.722-2.396,3.001-3.516c0.207-0.181,0.523-0.162,0.705,0.047c0.182,0.208,0.161,0.523-0.047,0.705	c-1.192,1.044-1.996,2.163-2.848,3.348c-0.646,0.9-1.315,1.831-2.192,2.78c-0.567,0.615-1.237,1.38-1.954,2.2	c-0.68,0.775-1.4,1.599-2.119,2.392C19.096,14.133,18.96,14.188,18.824,14.188z"></path>
            </svg>
          </a>
        </div>
        <div class="kakao-main">
          <button @click="startNavigation('kakao')">카카오내비</button>
          <a id="start-navigation"
             @click="startNavigation('kakao')">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <path fill="#263238" d="M24,4C12.402,4,3,11.611,3,21c0,5.99,3.836,11.245,9.618,14.273l-2.219,7.397	c-0.135,0.449,0.366,0.82,0.756,0.56l8.422-5.615C21.004,37.863,22.482,38,24,38c11.598,0,21-7.611,21-17S35.598,4,24,4z"></path><path fill="#ffca28" d="M15,18H9c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1v0	C16,17.552,15.552,18,15,18z"></path><path fill="#ffca28" d="M25,26v-9c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v9c0,0.552-0.448,1-1,1h0	C25.448,27,25,26.552,25,26z"></path><path fill="#ffca28" d="M32,26v-9c0-0.552,0.448-1,1-1l0,0c0.552,0,1,0.448,1,1v9c0,0.552-0.448,1-1,1l0,0	C32.448,27,32,26.552,32,26z"></path><path fill="#ffca28" d="M32.621,21.207l4.914-4.914c0.391-0.391,1.024-0.391,1.414,0v0c0.391,0.391,0.391,1.024,0,1.414	l-4.914,4.914c-0.391,0.391-1.024,0.391-1.414,0l0,0C32.231,22.231,32.231,21.598,32.621,21.207z"></path><path fill="#ffca28" d="M36.078,20.665l3.708,4.717c0.341,0.434,0.266,1.063-0.168,1.404l0,0	c-0.434,0.341-1.063,0.266-1.404-0.168l-3.708-4.717c-0.341-0.434-0.266-1.063,0.168-1.404v0	C35.108,20.156,35.737,20.231,36.078,20.665z"></path><path fill="#ffca28" d="M30,27h-4c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1v0	C31,26.552,30.552,27,30,27z"></path><path fill="#ffca28" d="M23.933,25.642l-3.221-9c-0.145-0.379-0.497-0.611-0.878-0.629c-0.111-0.005-0.54-0.003-0.641-0.001	c-0.392,0.007-0.757,0.241-0.906,0.63l-3.221,9c-0.198,0.516,0.06,1.094,0.576,1.292s1.094-0.06,1.292-0.576L17.42,25h4.16	l0.486,1.358c0.198,0.516,0.776,0.773,1.292,0.576S24.131,26.157,23.933,25.642z M18.136,23l1.364-3.812L20.864,23H18.136z"></path><path fill="#ffca28" d="M13,18h-2v8c0,0.552,0.448,1,1,1h0c0.552,0,1-0.448,1-1V18z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- 후원금 -->
    <div class="content-box">
      <button @click="isPopOpen = true">
        <span>신랑 & 신부에게 마음전달하기</span>
      </button>
    </div>

    <teleport to="body">
      <div v-if="isPopOpen" class="gift-modal-overlay" @click="closePopup">
        <div class="gift-info-wrap">
          <div class="font-wrap">
            <h3>신부측</h3>
            <p>
              신부 : 0111-212312213-21 (신한은행)
              <i class="fas fa-copy copy-icon" @click="copyToClipboard('0111-212312213-21', $event)"></i>
            </p>
            <p>
              신부 어머니 : 0111-212312213-22 (신한은행)
              <i class="fas fa-copy copy-icon" @click="copyToClipboard('0111-212312213-22', $event)"></i>
            </p>
          </div>
          <div class="font-wrap">
            <h3>신랑측</h3>
            <p>
              신랑 : 0111-212312213-21 (카카오뱅크)
              <i class="fas fa-copy copy-icon" @click="copyToClipboard('0111-212312213-21', $event)"></i>
            </p>
            <p>
              신랑 어머니 : 0111-212312213-22 (카카오뱅크)
              <i class="fas fa-copy copy-icon" @click="copyToClipboard('0111-212312213-22', $event)"></i>
            </p>
            <p>
              신랑 아버지 : 0111-212312213-23 (카카오뱅크)
              <i class="fas fa-copy copy-icon" @click="copyToClipboard('0111-212312213-23', $event)"></i>
            </p>
          </div>
          <p class="close-popup">닫기</p>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>

export default {
  name: "AddressPlus",
  data() {
    return {
      isPopOpen:false,
      isVisible: false, // 애니메이션 트리거
      isEditing: false,
      editedSection: {}, // 수정된 데이터
      map: null, // 카카오맵 객체
      geocoder: null, // Geocoder 객체
      latitude: '',
      longitude: '',
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
    );

    observer.observe(this.$refs.address);
    this.$nextTick(() => {
      this.initKakaoMap();
    });
  },

  methods: {
    closePopup(){
      this.isPopOpen = false;
    },
    copyToClipboard(number, event) {
      event.stopPropagation();
      const textArea = document.createElement('textarea');
      textArea.value = number;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert("복사되었습니다.")
    },
    // 내비게이션 실행
    startNavigation(param) {
      const lat = this.latitude;  // 목적지 위도
      const lng = this.longitude; // 목적지 경도
      const name = '서울특별시 용산구 용산동 1가 8번지'    // 목적지 이름 (옵션)

      if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {

        if(param === 'kakao') {
          // 카카오 SDK가 로드되었는지 확인
          if (typeof window.Kakao !== 'undefined' && window.Kakao.Navi) {
            // 카카오 내비게이션 호출
            window.Kakao.Navi.start({
              name: name,            // 목적지 이름
              x: lng,                // 경도
              y: lat,                // 위도
              coordType: 'wgs84',    // 좌표 시스템 (WGS84)
            });
          } else {
            alert('카카오 내비 SDK가 로드되지 않았습니다.');
          }
        } else {
          const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
          window.location.href = googleMapsUrl;
        }
      } else {
        alert('모바일 기기에서만 내비게이션을 사용할 수 있습니다.');
      }
    },

    initKakaoMap() {
      const kakaoApiKey = import.meta.env.VITE_KAKAO_API_KEY;
      const script = document.createElement("script");
      // 카카오 SDK 는 직접 발급부탁드립니다.
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoApiKey}&autoload=false&libraries=clusterer,services&`;
      document.head.appendChild(script);
      script.onload = () => {
        kakao.maps.load(() => {
          const mapContainer = document.getElementById('map'); // 지도를 표시할 div
          const mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 7, // 지도의 확대 레벨
          };

          this.map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성

          // 주소-좌표 변환 객체를 생성합니다
          var geocoder = new kakao.maps.services.Geocoder();

          const param = '서울특별시 용산구 용산동 1가 8번지'

          // 주소로 좌표를 검색합니다
          geocoder.addressSearch(param, function(result, status) {

            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {

              var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

              this.latitude = coords.getLat();  // 위도
              this.longitude = coords.getLng(); // 경도

              // 결과값으로 받은 위치를 마커로 표시합니다
              var marker = new kakao.maps.Marker({
                map: this.map,
                position: coords
              });

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              this.map.setCenter(coords);
            }
          }.bind(this));
        });
      };



    },
  },
};
</script>
<style scoped>
/* 애니메이션 */
.address-wrap {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1.5s ease, transform 1.5s ease;
  justify-self: center;
  padding: 20px 0 42px;
  width: 100%;

  .address-main-font{
    padding: 0 0 106px;

    p {
      font-size: 36px;
      font-weight: 400;
      color: #FFC0CB;
      text-align: center;
      line-height: 1.4;
      -webkit-text-stroke: 1px #FF69B4;
    }
  }

  .address-map {
    #map{
      border: 1px solid #FFC0CB;
    }
  }

  .address-directions {
    padding: 0 24px;
    margin-top: 24px;
    font-size: 14px;
  }

  .address-item {
    margin-bottom: 15px;
    line-height: 1.6;
  }

  .address-item p {
    margin-bottom: 6px;
  }

  .address-item span {
    font-weight: 700;
    font-size: 18px;
    color: #E57373;
    font-family: 'ownglyph', sans-serif !important;
    letter-spacing: 1px;
  }

  .address-item strong {
    color: #E57373;
    -webkit-text-stroke: 1px #FF69B4;
    font-family: 'ownglyph', sans-serif !important;
    font-weight: 700;
    font-size: 21px;
  }

  .animate-visible {
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }


  .address-nav-wrap{
    color: #FF69B4;
    padding: 24px 20px 0;
    position: relative;

    .kakao-wrap {
      font-size: 18px;
      gap: 12px;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      display: flex;

      .google-main,
      .kakao-main{
        padding: 2px 16px;
        border: 1px solid #FF69B4;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        gap: 6px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        width: 100%;

        a {
          img {
            padding-top: 4px;
            width: 24px;
            height: 100%;
          }
        }

        button {
          font-family: 'ownglyph', sans-serif!important;
          height: 100%;
          font-weight: 700;
          font-size: 18px;
        }


        &:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }
}

.content-box {
  z-index: 8;
  position: relative;
  color: #FF69B4;
  margin-top: 24px;
  padding: 0 20px 24px;
  button{
    border: 1px solid #FF69B4;
    border-radius: 999px;
    padding: 6px 24px;
    width: 100%;

    span {
      font-family: 'ownglyph', sans-serif!important;
      font-weight: 700;
      font-size: 18px;
    }
  }
}

.gift-info-wrap{
  padding: 44px 0 12px;
  margin: 12px 24px 24px;
  border-top: 0.6px solid #b0b0b0;
  .font-wrap {
    position: relative;
    padding: 12px 0;

    h3 {
      font-family: 'ownglyph', sans-serif !important;
      font-weight: 700;
      padding-bottom: 6px;
      white-space: nowrap;
      font-size: 18px;
      color: #FF69B4;
    }
    p {
      font-family: 'ownglyph', sans-serif !important;
      font-weight: 700;
      font-size: 15px;
      color: #E57373;
      margin-bottom: 10px;
      word-wrap: break-word;
      overflow-wrap: break-word;
      max-width: 100%;
      line-height: 1.4;
    }

    .copy-icon {
      cursor: pointer;
      color: #fa8ea8;
      transition: color 0.3s;
      margin-left: 10px;
      position: absolute;
      right: 10px;
    }

    .copy-icon:hover {
      color: #E57373;
    }
  }
}
.gift-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.3s ease;
}

.gift-info-wrap {
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 90%;
  animation: fadeInScale 0.4s ease forwards;
}

.font-wrap {
  margin-bottom: 12px;
  text-align: left;
}

.font-wrap h3 {
  font-size: 20px;
  color: #E57373;
  font-weight: bold;
  margin-bottom: 10px;
}

.font-wrap p {
  font-size: 16px;
  color: #555;
  line-height: 1.8;
  position: relative;
  padding-right: 30px;
}

.copy-icon {
  cursor: pointer;
  color: #fa8ea8;
  transition: color 0.3s ease, transform 0.2s ease;
  position: absolute;
  right: 0;
  top: 10%;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.close-popup {
  width: 100%;
  padding: 6px 0;
  text-align: center;
  cursor: pointer;
  transition: color 0.3s ease;
  background-color: #ff91a4;
  border-radius: 6px;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  font-family: 'ownglyph', sans-serif !important;
}

.gift-modal-overlay:hover {
  cursor: pointer;
}

.address-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>