import Background2 from "../background-2";
import Card from "../card";

export default function QuoteView() {
  return (
    <Background2>
      <Card>
        <div className="text-center">
          <div className="text-center text-xl text-wedprimary-color font-sans">
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
            لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً
            وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </div>
          <div className="h-10" />
          <div className="italic text-center">
            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
            pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu
            merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
            kasih sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir
          </div>
          <div className="h-10" />
          <div className=" font-bold text-wedprimary-color">
            Q.S. Ar Rum: 21
          </div>
        </div>
      </Card>
    </Background2>
  );
}
