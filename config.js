var config = {
    style: 'mapbox://styles/wataruyoshida/clk3ipjah004b01ra3tse6xxf/draft',
    accessToken: 'pk.eyJ1Ijoid2F0YXJ1eW9zaGlkYSIsImEiOiJjbDFtd3d6YjgwM3FkM2pxN2R6cnZ3a2FqIn0.6A1hUsWM-2kBi7_mqTvJMg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'K-POP MV聖地巡礼',
    subtitle: 'K-POPアイドルのMVが撮影された場所を巡っていきましょう！',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: '「赤墓ビーチ」 TWICE  Dance The Night Away',
            image: 'https://thebiaslistcom.files.wordpress.com/2018/07/twice-dance-the-night-away.jpg',
            description: 'こちらは沖縄県今帰仁村にある赤墓(あかばか)ビーチです。TWICEの代表的な夏の曲である「Dance The Night Away」は実は沖縄県で撮影されていました！沖縄県の青い海や綺麗な砂浜をバックに踊っているのが印象的ですね！沖縄県にある数ある有名ビーチには数えられていませんが、K-POPファンであるならぜひ一度ここに訪れて本人たちと同じ画角でとってみたいものですね！　車で訪れるのがおすすめです。 <br> YouTube:https://youtu.be/Fm5iP0S1z9w?feature=shared <br>  <br> 住所：沖縄県国頭郡今帰仁村諸志 <br> 駐車場：無料（約7台）有料（約5台）',
            location: {
                center: [127.94124, 26.70487],
		zoom: 17.50,
		pitch: 58.50,
		bearing: -180.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: '「読谷村残波岬」 BTS  Let Go',
            image: 'https://www.surairu-okinawa.com/wp-content/uploads/2023/02/87716fbeba481e9e9f8d8f9f05e8834f-1536x1040.jpg',
            description: 'こちらは沖縄県本島中部に位置する読谷村残波岬というスポットです。BTSの日本オリジナルアルバム「Face Yourself」に収録されている日本語曲「Let Go」のMV撮影地もなんと沖縄県です！残波岬の道で撮影されたメンバーのVのシーンを真似して写真を撮ることがARMY(ファン)の中でトレンドとなっています。すぐ近くの残波岬公園にはバスケットボールやサッカー、テニスができる施設があるので残波岬に訪れた際はそちらにも足を運んでみてはいかがでしょうか。 <br>  <br> 住所：沖縄県中頭郡読谷村宇座1861 <br> 駐車場：約100台(無料)',
            location: {
                center: [127.72054, 26.43748],
		zoom: 16.31,
		pitch: 60.13,
		bearing: 109.58,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
 	{
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: '「名鉄沿線」　NewJeans  Hurt (250 Remix) Special Video',
            image: 'https://pbs.twimg.com/media/FlE0HLgaYAQu54o?format=jpg&name=large',
            description: '今話題の5人組ガールズグループ New Jeansも実は日本で撮影しており、ファンからは驚きの声がでています！愛知県名古屋市に通っている名鉄や庄内川付近で撮影されていました。沖縄のビーチや岬とは打って変わって、アクセスの良い街中で撮影されているため、ぜひ訪れてみてはいかがでしょうか。MVもノスタルジックな雰囲気で景色とマッチしています！ <br> https://youtu.be/uONSk48LW1A?feature=shared <br>  <br> 愛知県名古屋市西区枇杷島町2丁目25-8付近 <br> 最寄駅：東枇杷島駅(犬山線、名鉄名古屋本線)',
            location: {
              center: [136.86846, 35.19177],
		zoom: 17.22,
		pitch: 37.16,
		bearing: -155.69,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: '「27 MCM」 Stray Kids  There',
            image: 'https://anotherview-location.com/wp-content/uploads/2023/03/0001-1.jpg',
            description: '人気ボーイズグループ「Stray Kids」の日本語曲である「There」は東京・横浜周辺で撮影されていました。 <br> 東京都渋谷区にある「27 MCM」というお好み焼き屋は、メンバーのメインラッパー「ハン」の撮影地です。渋谷駅から徒歩約10分なため、渋谷に訪れた際はぜひ立ち寄ってみてはいかがでしょうか。本人と同じ席に座れたらラッキー！！ <br>  <br> 住所：東京都渋谷区鶯谷町６−５ <br> 営業時間：17:00~25:00',
            location: {
               center: [139.70269, 35.65412],
		zoom: 16.95,
		pitch: 47.72,
		bearing: -8.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: '「YOKOHAMA AIR CABIN」  Stray Kids  There',
            image: 'https://anotherview-location.com/wp-content/uploads/2023/03/0007.jpg',
            description: 'メンバーのメインボーカル「スンミン」がMVの中で訪れた横浜市桜木町にあるエアキャビン。観光スポットとしても大変人気な施設で、横浜の市内を一望できます。 <br>  <br> 住所：神奈川県横浜市中区桜木町１丁目２００ <br> 営業時間：10:00~22:00',
            location: {
              center: [139.63147, 35.45150],
		zoom: 16.23,
		pitch: 53.58,
		bearing: 104.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: '「THE BAYS」  Stray Kids  There',
            image: 'https://anotherview-location.com/wp-content/uploads/2023/03/0009.jpg',
            description: 'メンバーのメインダンサーである「リノ」はMVで横浜市中区にある「THE BAYS」のテラスを訪れました。「THE BAYS」とは横浜DeNAベイスターズが提唱する横浜スポーツタウン構想として建てられた、Sports x Creativeをテーマにした複合施設です。おしゃれな空間が広がっているので中の方もぜひ入ってみてください。 <br>  <br> 住所；神奈川県横浜市中区日本大通３４',
            location: {
                center: [139.64187, 35.44485],
		zoom: 16.76,
		pitch: 54.08,
		bearing: -32.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'eighth-identifier',
            alignment: 'right',
            hidden: false,
            title: '「横浜港大さん橋」  Stray Kids  There',
            image: 'https://anotherview-location.com/wp-content/uploads/2023/03/0010.jpg',
            description: 'メンバーで、低音ボイスとお顔が魅力的な「Felix」はみなとみらいの「横浜港大さん橋」に訪れています。ぜひ本人と同じ画角で写真を撮ってみてください！ <br>  <br> 住所：神奈川県横浜市中区海岸通１丁目1−４ <br>  <br> 今回ご紹介した曲「There」の撮影場所のほとんどは観光地かつアクセスの良い場所で撮られているため、東京都心部、横浜を訪れた際は立ち寄って本人たちの奇跡を辿ってみてはいかがでしょうか',
            location: {
                center: [139.64665, 35.45090],
		zoom: 15.96,
		pitch: 67.71,
		bearing: -70.40,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'ninth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'MV聖地巡り　in 韓国',
            image: './path/to/image/source.png',
            description: '韓国ではどのような場所でMVが撮影されているのでしょうか。みていきましょう！',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'tenth-identifier',
            alignment: 'right',
            hidden: false,
            title: '「龍馬(ヨンマ)ランド」  TWICE  Like OHH-AHH, EXO  Ko Ko Bop',
            image: 'https://joah-girls.com/system/item_images/images/000/555/699/medium/603e0add-a9e4-40ba-ad78-dc0ca8ee6104.png?1656314450',
            description: '龍馬(ヨンマ)ランドとは、現在は閉園していますが「合法廃墟遊園地」として、入場料を払えば現在も誰でも入ることができる珍しい遊園地です。ここでは、たくさんのアイドルがMVやジャケット写真、ロケの撮影に訪れています。TWICE,EXOの他にも、BTSやBLACKPINK,TXTなど、有名アイドルのほとんどが一度はこの地を訪れています。特に、園内のメリーゴーランドでは様々なアイドルが撮影しており大変人気なスポットとなっています。 <br>  <br> 住所：ソウル特別市 中浪区 忘憂洞 山69-1 <br> 営業時間：10:00~18:00 <br> 最寄駅「忘憂駅」より徒歩約20分(タクシー推奨) <br> チケット予約ページ：https://www.creatrip.com/ja/spot/13325',
            location: {
               center: [127.10569, 37.59443],
		zoom: 15.77,
		pitch: 63.52,
		bearing: 65.59,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'eleventh-identifier',
            alignment: 'left',
            hidden: false,
            title: '注文津海水浴場  BTS  Spring Day',
            image: 'https://ibighit.com/bts/images/bts/discography/you_never_walk_alone/photo-19-m.jpg',
            description: '',
            location: {
               center: [128.81855, 37.91122],
		zoom: 15.55,
		pitch: 65.58,
		bearing: 179.20,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twelfth-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: '！',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'thirteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: '！',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'fourteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: '！',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifteenth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'last Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
