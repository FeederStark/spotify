import React from 'react';
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
        alt="Playlist"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>playlist pica</h1>
        <p>13 músicas</p>
        <button type="button">PLAY</button>
      </div>
    </Header>
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Title</th>
        <th>Artist</th>
        <th>Album</th>
        <th>
          <img src={ClockIcon} alt="Duration" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:20</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:20</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:20</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:20</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:20</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:20</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:20</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
