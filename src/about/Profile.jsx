function Profile() {
  return (
    <section className="flex flex-col items-center gap-6 lg:col-span-1">
      <div className="mx-auto max-w-60">
        <img src="./images/ya-picture.png" alt="avatar" className="block" />
      </div>

      <div className="text-base tracking-widest md:m-8 lg:p-3">
        <p>
          我是一名前端工程師，專注於創建高效、美觀且功能強大的網頁。無論您是企業需要品牌形象網站，個人工作室尋求專業網頁，一頁式宣傳頁面，電子邀請函，還是複雜的網頁應用程式，我都能為您提供量身定制的解決方案。
        </p>
      </div>
    </section>
  );
}

export default Profile;
