import Container from '../components/ui/Container';
import Header from '../components/ui/Header';
import { ReactComponent as Bell } from '../assets/icons/Bell.svg';
import { ReactComponent as User } from '../assets/icons/user.svg';
import { ReactComponent as Writing } from '../assets/icons/writing.svg';
import { ReactComponent as Language } from '../assets/icons/language.svg';
import { ReactComponent as Star } from '../assets/icons/star.svg';
import { ReactComponent as UpArrow } from '../assets/icons/upArrow.svg';
import { ReactComponent as Chat } from '../assets/icons/chat.svg';
import Button from '../components/ui/Button';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const { logout } = useContext(AuthContext);

    return (
        <Container className="pb-32 pt-12">
            <Header text="Profile" />

            <div className="h-full overflow-y-auto flex flex-col items-center gap-y-8">
                <ProfileCard>
                    <img
                        src="https://picsum.photos/200"
                        alt="pic1"
                        className="w-20 h-20 rounded-full"
                    />
                    <div className="flex flex-col items-start">
                        <h1>Sadek Hossen</h1>
                        <h1>some.email@gnail.some</h1>
                    </div>
                    <div className="bg-slate-200 rounded-full p-3">
                        <Bell />
                    </div>
                </ProfileCard>

                <ProfileCard>
                    <div className="flex gap-x-4 p-4">
                        <User />
                        <h1>Account setting</h1>
                    </div>
                    <Writing />
                </ProfileCard>

                <ProfileCard className="flex flex-col">
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center justify-center gap-x-4 py-4">
                            <Language />
                            <h1>Language</h1>
                        </div>
                        <h1>{'>'}</h1>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center justify-center gap-x-4 py-4">
                            <Chat />
                            <h1>Feedback</h1>
                        </div>
                        <h1>{'>'}</h1>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center justify-center gap-x-4 py-4">
                            <UpArrow />
                            <h1>Rate us</h1>
                        </div>
                        <h1>{'>'}</h1>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center justify-center gap-x-4 py-4">
                            <Star />
                            <h1>New Version</h1>
                        </div>
                        <h1>{'>'}</h1>
                    </div>
                </ProfileCard>

                <Button text="Log Out" theme="danger" onClick={logout} />
            </div>
        </Container>
    );
};

const ProfileCard = (props) => {
    return (
        <div
            className={
                'w-[400px] mx-auto py-3 px-4 flex items-center justify-between gap-x-8 rounded-lg shadow-md ' +
                props.className
            }
        >
            {props.children}
        </div>
    );
};

export default Profile;
