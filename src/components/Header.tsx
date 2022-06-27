import { Header, HeaderOptionItem } from '@appkit4/react-components/header';
import { Avatar } from '@appkit4/react-components/avatar';

const HeaderSample = () => {
    const onClickLogo = (event: React.MouseEvent<HTMLElement>) => {
        console.log('onClickLogo', event);
    }

    return (
        <div className="header-demo-wrapper">
            <Header
                type="transparent"
                onClickLogo={onClickLogo}
                titleTemplate={() => "Appkit"} 
                contentTemplate={() => <HeaderOptionItem iconName="search-outline" label="Search"></HeaderOptionItem>}
                optionsTemplate={() => {
                    return (
                        <>
                            <HeaderOptionItem iconName="help-question-outline" label="Support"></HeaderOptionItem>
                            <HeaderOptionItem iconName="notification-outline" label="Alerts"></HeaderOptionItem>
                        </>
                    )
                }}
                userTemplate={() => (<Avatar label="VR" role="button" disabled={false}></Avatar>)}>
            </Header>
        </div>
    );
}

export default HeaderSample;