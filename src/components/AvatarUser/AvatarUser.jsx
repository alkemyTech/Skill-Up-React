// hooks
import { useSelector } from 'react-redux';
// components

import { ContentAvartarUser } from './Avatar.styles';

function AvatarUser() {
    const UserState = useSelector((store) => store.user);

    function sayHi() {
        const time = new Date();
        const now = time.getHours();
        if (now >= 6 && now < 12) {
            return 'Good morning';
        }
        if (now >= 12 && now < 18) {
            return 'Good afternoon';
        }
        if (now >= 18 && now <= 23) {
            return 'Good night';
        }
        return 'Hola';
    }
    return (
        <ContentAvartarUser>
            <div className="avatar-user">
                <img
                    alt="sebastian pastorenzi"
                    src={`https://ui-avatars.com/api/?name=${UserState.first_name.replace(
                        ' ',
                        '+'
                    )}+${UserState.last_name.replace(' ', '+')}`}
                />
            </div>

            <div className="greetings d-flex center">
                <span className="greet f-14 fw-3">{sayHi()}</span>
                <span className="avatar_name f-24 fw-5">
                    {UserState.first_name} {UserState.last_name}
                </span>
            </div>
        </ContentAvartarUser>
    );
}

export default AvatarUser;
