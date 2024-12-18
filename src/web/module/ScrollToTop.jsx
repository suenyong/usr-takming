import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // 每次路由變更時，滾動到頂部
    }, [pathname]);

  return null; // 不需要渲染任何內容
}
