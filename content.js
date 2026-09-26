// =====================================================================
//  ポートフォリオの中身はこのファイルだけ編集すればOKです
//  ・文章は "" の中を書き換える
//  ・項目を増やすときは { ... }, のまとまりをコピーして貼り付ける
//  ・画像は images フォルダに入れて image: "images/ファイル名.jpg" と書く
//    （画像がないときは image: "" のままでOK）
//  ・中身が空（[] や ""）の欄はサイトに表示されません。書いた分だけ出ます
//  ※ 数字（いいね数・再生数など）は、自分で最新の値を確認してから書いてください
// =====================================================================

window.PORTFOLIO = {
  profile: {
    name: "あいしゃん",
    nameSub: "aisyan",
    catch: "欲しいは、自分で作る。",
    lead:
      "VRChatで遊びながら、電子工作や基板づくりをしています。" +
      "フルボディトラッカーを基板から作ったり、ガジェット好きの集まりで副主催をしたりしています。",
    avatar: "", // 例: "images/avatar.jpg"
    updated: "2026-09-25", // 最終更新日。直したら日付を変える
    links: [
      { label: "X（VRChat）", url: "https://x.com/vrc_aisyan" },
      { label: "X（電子工作）", url: "https://x.com/aisyandensi" },
      { label: "note", url: "https://note.com/aisyan" },
      // { label: "BOOTH", url: "https://〇〇.booth.pm/" },
    ],
  },

  // トップに大きく出る数字（空 [] なら表示しない）
  // 復活させたいときは下の // を消す
  stats: [
    // { value: "100万+", label: "自作ガジェット動画の再生数" },
    // { value: "2.5万+", label: "同動画のいいね数" },
    // { value: "JLCPCB", label: "基板メーカーからスポンサー獲得" },
    // { value: "副主催", label: "VRChat ガジェット愛好会" },
  ],

  // プロフィール。{ label: "", text: "" } を増やして書く
  // 例: { label: "好きなもの", text: "ガジェット / 電子工作" },
  about: [],

  // 制作物（上から順に表示）
  // area は分類。"VRChat" か "リアル"（好きな名前でもOK。切り替えボタンが自動で増えます）
  projects: [
    {
      title: "ニキシー管腕時計",
      period: "2023.12",
      area: "リアル",
      tags: ["ニキシー管", "高電圧回路", "筐体デザイン"],
      summary:
        "ニキシー管を使った腕時計を、一から設計し直しました。ニキシー管を光らせるための高電圧の回路と、" +
        "腕に着けられる大きさの筐体をまとめるのが難しいところで、前の版よりずっと見た目よく仕上がりました。",
      points: [],
      image: "",
      links: [{ label: "完成ポスト", url: "https://x.com/aisyandensi/status/1734512447267184866" }],
    },
    {
      title: "レーザーハープ",
      period: "",
      area: "リアル",
      tags: ["Raspberry Pi Pico", "フォトダイオード", "MIDI"],
      summary:
        "レーザー光を手でさえぎると音が鳴る楽器です。レーザーモジュールの光をフォトダイオードで受けて、" +
        "光が切れたことをRaspberry Pi Picoで検知し、MIDIでPCに送って演奏します。NT福島で展示しました。",
      points: [],
      image: "",
      links: [],
    },
    {
      title: "エグゾーストキャノン",
      period: "2023.05〜2024.03",
      area: "リアル",
      tags: ["メカ設計", "3Dプリント", "塩ビパイプ", "試作と改良"],
      summary:
        "圧縮空気で大きな音を鳴らす装置です。Oリングの仕組みも分からないところから始めて、" +
        "単管式・二重筒式・その間の「半二重筒式」と、構造を変えながら何台も作り比べました。",
      points: [
        "初号機は空気漏れなしで完成",
        "エアコンプレッサーで試したとき、マットのフィラメントで作った部品が粉々に割れた。材料と設計を見直すきっかけに",
        "半二重筒式はピストンが作りやすく威力も十分。ただ空気の入る量が少ないのが次の課題",
        "ボディを透明な塩ビ管に変えて、中のピストンの動きが見えるように。管の寸法が違ったのでOリングのシールを調整し直した",
      ],
      image: "",
      links: [
        { label: "初号機 完成", url: "https://x.com/aisyandensi/status/1664639985809588224" },
        { label: "部品が割れた失敗", url: "https://x.com/aisyandensi/status/1691677908946022537" },
        { label: "二重筒式", url: "https://x.com/aisyandensi/status/1696409738752176132" },
        { label: "半二重筒式", url: "https://x.com/aisyandensi/status/1700134195719504372" },
        { label: "透明ボディ版", url: "https://x.com/aisyandensi/status/1768777440539586703" },
      ],
    },
    {
      title: "カラーギター",
      period: "",
      area: "リアル",
      tags: ["Raspberry Pi Pico", "MicroPython", "カラーセンサー", "NeoPixel"],
      summary:
        "カラーセンサーで読み取った色を音に変える楽器です。LEDテープで光らせながら、" +
        "PicoのPWM出力で音を鳴らします。ボタンでオクターブも切り替えられます。",
      points: [],
      image: "",
      links: [],
    },
    {
      title: "自作フルボディトラッカー",
      period: "2025.11",
      area: "VRChat",
      tags: ["PCB設計", "KiCad", "JLCPCB", "はんだ付け"],
      summary:
        "フルボディトラッカーを基板から作りました。KiCadで設計して、JLCPCBに面付けで発注しています。" +
        "組み立てたものは全部ちゃんと動きました。動いている動画を載せたら600いいねくらいついて、" +
        "それがきっかけでJLCPCBさんからスポンサーの話をいただきました。",
      // points には「苦労したこと」「工夫したこと」を自分の言葉で書くのがおすすめ
      // 例: points: ["最初の版は〇〇で動かなくて、△△を直したら安定した"],
      points: [],
      image: "",
      links: [
        { label: "完成報告ポスト", url: "https://x.com/vrc_aisyan/status/1986840521659359390" },
        { label: "個人で基板を作れる話", url: "https://x.com/vrc_aisyan/status/2089230508630905094" },
      ],
    },
    {
      title: "PCB名刺（名刺基板）",
      period: "2025.12",
      area: "VRChat",
      tags: ["KiCad", "基板デザイン", "スポンサー案件", "イベント配布"],
      summary:
        "JLCPCBさんのスポンサーで、名刺サイズの基板を作りました。KiCadでアバターの写真やSNSのIDを載せて、" +
        "届いた基板にはんだ付けし、VketRealで配って交換しました。" +
        "作り方はnoteにまとめていて、VRC Advent Calendar 2025の記事にもなっています。",
      points: [],
      image: "",
      links: [
        { label: "届いた報告", url: "https://x.com/vrc_aisyan/status/1998747935333560533" },
        { label: "note：名刺基板作ってみた", url: "https://note.com/aisyan/n/n94f51213280f" },
        { label: "note：VketRealに向けて名刺を作ろう", url: "https://note.com/aisyan/n/nebbad9c4f6fd" },
      ],
    },
    {
      title: "VketReal レシート印刷システム",
      period: "2026.07",
      area: "VRChat",
      tags: ["システム開発", "感熱プリンタ", "イベント現場"],
      summary:
        "VketRealの会場で、好きな文字を入れてその場で1枚だけのレシートを印刷できる仕組みを作りました。" +
        "前にもSUNMI V2（プリンタ付きの端末）で名刺をその場で刷って渡していて、" +
        "「移動中に作って会場で刷ればいい」とポストしたら2000いいねを超えました。",
      points: [],
      image: "",
      links: [
        { label: "完成動画", url: "https://x.com/vrc_aisyan/status/2079407916332028325" },
        { label: "その場で印刷する提案", url: "https://x.com/vrc_aisyan/status/1999413687174791499" },
      ],
    },
    {
      title: "「できちゃった！」自作ガジェット",
      period: "2025.08",
      area: "VRChat",
      tags: ["プロトタイピング", "動画発信"],
      summary:
        "作ったガジェットが動いた瞬間の動画です。思っていた以上に広がって、" +
        "100万回以上再生、2.5万いいねになりました。",
      points: [],
      image: "",
      links: [{ label: "動画ポスト", url: "https://x.com/vrc_aisyan/status/1954902833893146855" }],
    },
    {
      title: "OSCで動く触覚デバイス",
      period: "2025.07",
      area: "VRChat",
      tags: ["OSC", "振動モーター", "VR"],
      summary:
        "VRChatで体に触れられたことをOSCで受け取り、現実のモーターを振動させる実験です。" +
        "撫でられている感覚がちゃんと伝わりました。",
      points: [],
      image: "",
      links: [{ label: "実験ポスト", url: "https://x.com/aisyandensi/status/1950723954928189892" }],
    },
    {
      title: "雀魂専用コントローラー",
      period: "2023.08",
      area: "リアル",
      tags: ["Raspberry Pi Pico", "入力デバイス"],
      summary:
        "オンライン麻雀「雀魂」を遊ぶための専用コントローラーです。Raspberry Pi Picoでマウスの操作を送り、" +
        "ボタンを押すと画面上の決まった場所がクリックされます。狙った位置に合わせる座標の扱いに苦労しました。",
      points: [],
      image: "",
      links: [
        { label: "動作動画", url: "https://x.com/aisyandensi/status/1687476191215960064" },
        { label: "製作中", url: "https://x.com/aisyandensi/status/1687364853948968960" },
      ],
    },
    // ↓ 追加するときはこの形で（先頭の // を消すと表示されます）
    // {
    //   title: "〇〇の制作",
    //   period: "2026",
    //   area: "リアル",
    //   tags: ["タグ1", "タグ2"],
    //   summary: "何を、なぜ作ったか。",
    //   points: ["工夫したこと", "結果・数字"],
    //   image: "",
    //   links: [],
    // },
  ],

  // BOOTHなどでの頒布・販売。{ ... }, を増やして書く
  // 例: {
  //       title: "〇〇トラッカー用基板キット",
  //       price: "¥1,500",
  //       summary: "どんな人向けに、何を作って売っているか。",
  //       result: "累計〇〇個頒布",   // 販売数・レビューなど。無ければ "" でOK
  //       image: "images/booth1.jpg",
  //       url: "https://〇〇.booth.pm/items/〇〇〇〇",
  //     },
  shop: [],

  // 団体・コミュニティでの活動。サークル・部活・学生団体なども同じ形で追加できます
  activities: [
    {
      title: "ガジェット愛好会 副主催",
      area: "VRChat",
      period: "",
      summary:
        "VRChatのガジェット好きが集まる「ガジェット愛好会」で副主催をしています。" +
        "毎月の集会の準備や告知のほか、テーマを決めた特別回やリアルでの集まりも企画しています。",
      items: [
        { text: "毎月第2・第4日曜の集会の準備・告知・当日の進行", url: "https://x.com/vrc_aisyan/status/2099060767723036975" },
        { text: "オーディオがテーマのLT会「Hallo Audio！」を企画", url: "https://x.com/vrc_aisyan/status/2055936611645272316" },
        { text: "リアルでガジェットを持ち寄る写真会を開催", url: "https://x.com/vrc_aisyan/status/2058371835679719438" },
        { text: "#VRCメガネ祭りとのコラボで「メガネガジェットLT会」を企画", url: "" },
        { text: "ゼルダの伝説40周年Directの応援上映会", url: "https://x.com/vrc_aisyan/status/2096968475784904889" },
      ],
    },
    {
      title: "NT福島 出展",
      area: "VRChat",
      period: "",
      summary:
        "「あいしゃん」として、ものづくり展示イベントのNT福島に出展しました。",
      items: [
        { text: "レーザーハープの展示・演奏", url: "" },
        { text: "VRChat内で手が触れると、OSC経由で現実のサーボモーターが動くデバイスの展示", url: "" },
      ],
    },
    // {
    //   title: "〇〇サークル 〇〇担当",
    //   area: "リアル",
    //   period: "2024〜",
    //   summary: "どんな団体で、何を担当したか。",
    //   items: [{ text: "やったこと", url: "" }],
    // },
  ],

  // 登壇・執筆
  talks: [
    {
      kind: "登壇",
      title: "VRゴーグル所有者がスマートグラスを買ってみたら 〜XREAL Oneの使用感とVR民との相性",
      where: "メガネガジェットLT会",
      url: "https://x.com/vrc_aisyan/status/2085743240620442023",
    },
    {
      kind: "記事",
      title: "【VRChat】名刺基板作ってみた！",
      where: "note / VRC Advent Calendar 2025",
      url: "https://note.com/aisyan/n/n94f51213280f",
    },
    {
      kind: "記事",
      title: "【VRChat】VketRealに向けて名刺を作ろう",
      where: "note",
      url: "https://note.com/aisyan/n/nebbad9c4f6fd",
    },
  ],

  // 活動の年表（書いた順に表示）
  // 例: { date: "2025.08", text: "「できちゃった！」の動画がバズる" },
  timeline: [],

  // スキル（グループごと）
  skills: [
    { group: "ものづくり", items: ["3Dプリント", "Raspberry Pi Pico / ESP32", "MicroPython", "電子工作", "PCB設計（KiCad）", "はんだ付け", "基板発注（JLCPCB）", "プロトタイピング"] },
    { group: "運営・企画", items: ["コミュニティ運営", "イベント企画・運営", "LT会の運営", "スポンサー企業とのやりとり"] },
    { group: "発信", items: ["技術記事（note）", "X での発信・動画", "LT登壇"] },
    { group: "領域", items: ["VRChat", "VR / AR ガジェット", "スマートグラス"] },
  ],
};
