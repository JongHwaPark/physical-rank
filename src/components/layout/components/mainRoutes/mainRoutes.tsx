import { Routes, Route } from "react-router-dom";
import RankingPage from "pages/ranking";
import NotMatchPage from "pages/notMatch";

const MainRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<RankingPage />}>
                <Route index path="rank" element={<RankingPage />} />
                <Route path="*" element={<NotMatchPage />} />
            </Route>
      </Routes>        
    )    
};


export default MainRoutes;