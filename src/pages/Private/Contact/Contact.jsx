import { Avatar, Container, Link, Typography } from '@mui/material';
import { ContentContact } from './Contact.styles';

function Contact() {
    return (
        <ContentContact>
            <Typography variant="h4" gutterBottom>
                Equipo de desarrolladores del grupo 3 para el Alkemy Skill-Up:
            </Typography>
            <Container>
                <Container>
                    <Link
                        href="https://github.com/DaikonCOde"
                        id="alex"
                        target="_blank"
                        rel="noreferrer">
                        <Avatar src="https://avatars.githubusercontent.com/u/79052246?v=4" />
                    </Link>
                    <h2>Alex</h2>
                </Container>
                <Container>
                    <Link href="https://github.com/Kapee87" target="_blank" rel="noreferrer">
                        <Avatar src="https://avatars.githubusercontent.com/u/89433307?v=4" />
                    </Link>
                    <h2>Nahuel</h2>
                </Container>
                <Container>
                    <Link href="https://github.com/seba-pas" target="_blank" rel="noreferrer">
                        <Avatar src="https://avatars.githubusercontent.com/u/102265528?v=4" />
                    </Link>
                    <h2>Sebas</h2>
                </Container>
                <Container>
                    <Link
                        href="https://github.com/RodriguezDlaFlor"
                        target="_blank"
                        rel="noreferrer">
                        <Avatar src="https://avatars.githubusercontent.com/u/116192201?v=4" />
                    </Link>
                    <h2>Flor</h2>
                </Container>
                <Container>
                    <Link href="https://github.com/emifrese" target="_blank" rel="noreferrer">
                        <Avatar src="https://avatars.githubusercontent.com/u/80860297?v=4" />
                    </Link>
                    <h2>Emi</h2>
                </Container>
                <Container>
                    <Link href="https://github.com/Nikl4auss" target="_blank" rel="noreferrer">
                        <Avatar src="https://avatars.githubusercontent.com/u/65145528?v=4" />
                    </Link>
                    <h2>Niko</h2>
                </Container>
            </Container>
        </ContentContact>
    );
}

export default Contact;
