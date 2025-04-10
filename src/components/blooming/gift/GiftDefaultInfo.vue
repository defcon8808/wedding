<template>
  <div class="blooming-default">
    <!-- "마음 전하실 곳" 헤더 영역 -->
    <div class="header-section">
      <h3 class="loving-title">마음 전하실 곳</h3>
    </div>

    <div class="font-wrap text_02">
        <h3>신부측</h3>
        <p>
          정혜지 : 110-204-976266 (신한은행)
          <i class="fas" @pointerdown="copyToClipboard('110204976266')"
            >복사하기</i
          >
        </p>
        <p>
          정형식 : 318-023-47653 (신한은행)
          <i class="fas" @pointerdown="copyToClipboard('31802347653')"
            >복사하기</i
          >
        </p>
      </div>
      <div class="font-wrap text_02">
        <h3>신랑측</h3>
        <p>
          박주안 : 1000-5407-2660 (토스뱅크)
          <i class="fas" @pointerdown="copyToClipboard('100054072660')"
            >복사하기</i
          >
        </p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showGiftInfo: false,
    };
  },
  methods: {
    toggleGiftInfo() {
      this.showGiftInfo = !this.showGiftInfo;
    },
    // Toast 메시지를 보여주는 함수
    showToast(message, duration = 2000) {
      const toast = document.createElement("div");
      toast.textContent = message;
      
      // 토스트 스타일 설정
      toast.style.position = "fixed";
      toast.style.bottom = "20px";
      toast.style.left = "50%";
      toast.style.transform = "translateX(-50%)";
      toast.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      toast.style.color = "#fff";
      toast.style.padding = "10px 20px";
      toast.style.borderRadius = "5px";
      toast.style.fontSize = "14px";
      toast.style.zIndex = "9999";
      toast.style.opacity = "1";
      toast.style.transition = "opacity 0.5s linear";
      
      document.body.appendChild(toast);
      
      // 일정 시간 후 토스트 메시지를 서서히 사라지게 합니다.
      setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 500); // Fade-out 효과 지속 시간
      }, duration);
    },
    copyToClipboard(text) {
      // Clipboard API 지원되지 않는 경우에 대비한 fallback 코드
      const textArea = document.createElement("textarea");
        textArea.value = text;
        // 화면에 영향을 주지 않도록 스타일을 최소화합니다.
        textArea.style.position = "fixed";
        textArea.style.top = 0;
        textArea.style.left = 0;
        textArea.style.width = "2em";
        textArea.style.height = "2em";
        textArea.style.padding = 0;
        textArea.style.border = "none";
        textArea.style.outline = "none";
        textArea.style.boxShadow = "none";
        textArea.style.background = "transparent";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          const successful = document.execCommand('copy');
          const msg = successful ? '복사되었습니다!' : '복사 실패';
          //alert(msg);
          this.showToast(msg)
        } catch (err) {
          console.error('Fallback 복사 실패:', err);
        }
        document.body.removeChild(textArea);

    },
  },
};
</script>

<style>
.blooming-default {
  text-align: center;
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
}
.call-button,
.gift-button {
  display: block;
  width: 80%;
  margin: 10px auto 2rem;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.call-button {
  padding: 0.5rem 16px;
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.gift-button {
  padding: 0.5rem 16px;
  background-color: #fff1f3;
  border: 1px solid #ddd;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  gap: 6px;
}
.gift-info-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.2);
  padding: 25px;
  text-align: left;
  transform: translateY(100%);
  transition: transform 0.4s ease-out, opacity 0.3s ease-out;
  z-index: 1000;
  border-radius: 20px 20px 0 0;
  opacity: 0;
}

.gift-info-wrap.show {
  padding-bottom: 6rem;
  transform: translateY(0);
  opacity: 1;
}

.font-wrap {
  margin-bottom: 20px;
}

.font-wrap h3 {
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  margin-left: 20px;
  text-align: left;
}

.font-wrap p {
  font-size: 1rem;
  color: #555;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.font-wrap p i {
  margin-left: 10px;
  cursor: pointer;
  color: #4a90e2;
  transition: color 0.3s ease;
}

.font-wrap p i:hover {
  color: #1d65b8;
}

.gift-info-wrap .copy-icon {
  cursor: pointer;
  color: #4a90e2;
  margin-left: 8px;
  transition: color 0.3s;
}

.gift-info-wrap .copy-icon:hover {
  color: #1d65b8;
}

.gift-info-wrap .font-wrap:last-child {
  border-top: 1px solid #eee;
  padding-top: 15px;
  margin-top: 15px;
}

.gift-info-wrap .font-wrap p {
  font-size: 1rem;
}

.gift-info-wrap .footer {
  margin-top: 20px;
  text-align: center;
}

.gift-info-wrap .footer p {
  font-size: 0.9rem;
  color: #888;
}

.header-section {
  margin-bottom: 2rem;
}

.loving-title {
  padding: 1.5rem 1rem;
  font-size: 1.8rem;
  font-weight: bold;
  max-width: 100%;
  margin: 0 auto;
}
</style>