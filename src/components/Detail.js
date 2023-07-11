import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";

const Detail = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    // Grab the moive info from DB=
    db.collection("Movies")
      .doc(id)
      .get()
      .then((doc) => {
        console.log(doc.data());
        if (doc.exists) {
          // save the movie data
          setMovie(doc.data());
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);
  console.log("Movie is", movie);
  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.BackgroundImg} />
          </Background>
          <ImageTitle>
            <img src={movie.TitleImg} />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" alt="" />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" alt="" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{movie.Genres}</SubTitle>
          <Description>{movie.Description}</Description>
        </>
      )}
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc (3.5vw + 5px);
  positon: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.7;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-left: 20px;
  margin-top: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0 24px;
  margin-right: 22px;

  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb (249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;
  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
margin-left:20px;
color: rgb (249, 249, 249) ; 
fontasize: 15px: 
min-height: 20px; 
 margin-top: 26px;`;

const Description = styled.div`
  margin-left: 20px;
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  max-width: 760px;
`;
