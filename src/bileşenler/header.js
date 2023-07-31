const Header = (baslik, tarih, yazi) => {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const dateSpan = document.createElement("span");
  dateSpan.classList.add("date");
  dateSpan.textContent = tarih;

  const h1Element = document.createElement("h1");
  h1Element.textContent = baslik;

  const yaziSpan = document.createElement("span");
  yaziSpan.classList.add("temp");
  yaziSpan.textContent = yazi;

  headerDiv.prepend(dateSpan);
  headerDiv.prepend(h1Element);
  headerDiv.prepend(yaziSpan);

  return headerDiv;

  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <d iv class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
};

const headerEkleyici = (secici) => {
  const baslik = "Teknoloji Zamanı";
  const tarih = "11 Kasım 2029";
  const yazi = "Teknoloji sayfasıdır kafanız allak bullak olabilir.";

  const header = Header(baslik, tarih, yazi);
  const seciciEleman = document.querySelector(secici);

  seciciEleman.prepend(header);
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
};

export { Header, headerEkleyici };
