import { Toggle } from "./toogle";
import { Wrapper } from "./wrapper";
import { Navigation } from "./navigation";

export const Sidebar = () => {
    return (
        <Wrapper>
            <Toggle />
            <Navigation />
        </Wrapper>
    );
};
