import r2modman_download1 from '../s2mods/r2modman_download1.png'
import r2modman_download2 from '../s2mods/r2modman_download2.png'
import r2modman_download3 from '../s2mods/r2modman_download3.png'
import r2modman_download4 from '../s2mods/r2modman_download4.png'
import r2modman_download5 from '../s2mods/r2modman_download5.png'
import r2modman_download6 from '../s2mods/r2modman_download6.png'
import r2modman_select_game from '../s2mods/r2modman_select_game.png'
import r2modman_select_platform from '../s2mods/r2modman_select_platform.png'
import r2modman_create_profile from '../s2mods/r2modman_create_profile.png'
import r2modman_create_profile2 from '../s2mods/r2modman_create_profile2.png'
import r2modman_select_profile from '../s2mods/r2modman_select_profile.png'
import r2modman_online from '../s2mods/r2modman_online.png'
import r2modman_install_modpack from '../s2mods/r2modman_install_modpack.png'
import r2modman_install_modpack2 from '../s2mods/r2modman_install_modpack2.png'
import r2modman_start_modded from '../s2mods/r2modman_start_modded.png'

const imageStyle = {
  height: '100%',
  width: '100%',
  objectFit: 'contain',
}

export default function Guide() {
  return (
    <>
      <h2 className="font-semibold text-2xl">Coffeeheim Season 2 Modpack</h2>

      <p>
        The first thing you want to download is a mod manager. This will help
        you download mods, place everything in the proper Valheim folders, and
        keep the mods up to date. While there are a few options available, I
        recommend r2modman as it is the one I am most familiar with. The guide
        will assume you are using r2modman.
      </p>

      <p>
        Open a web browser and go to{' '}
        <a href="https://thunderstore.io/package/ebkr/r2modman/">
          https://thunderstore.io/package/ebkr/r2modman/
        </a>
      </p>

      <p>
        Click the "Manual Download" button to download the latest version of
        r2modman.
      </p>
      <img style={imageStyle} src={r2modman_download1} alt="download" />

      <p>
        Once the download is complete, right-click the file and extract to its
        own folder using 7-zip, WinRAR, or something similar.
      </p>
      <img style={imageStyle} src={r2modman_download2} alt="extract" />

      <p>
        After the extraction has finished, double-click the file
        r2modman-Setup-3.x.xx.exe to install the program.
      </p>
      <img style={imageStyle} src={r2modman_download3} alt="install" />

      <p>Click Next.</p>
      <img style={imageStyle} src={r2modman_download4} alt="next" />

      <p>Click Install.</p>
      <img style={imageStyle} src={r2modman_download5} alt="install" />

      <p>Click the Finish button.</p>
      <img style={imageStyle} src={r2modman_download6} alt="finish" />

      <p>
        Once r2modman has loaded, highlight Valheim in the list of games and
        click the Select game button.
      </p>
      <img style={imageStyle} src={r2modman_select_game} alt="select game" />

      <p>
        In the pop-up check the box for Steam and click the Select platform
        button.
      </p>
      <img
        style={imageStyle}
        src={r2modman_select_platform}
        alt="select platform"
      />

      <p>Click the Create New button in the bottom center.</p>
      <img
        style={imageStyle}
        src={r2modman_create_profile}
        alt="import update"
      />

      <p>
        In the pop-up, enter a name for the profile and then click the Create
        button.
      </p>
      <img
        style={imageStyle}
        src={r2modman_create_profile2}
        alt="import update"
      />

      <p>
        Make sure the new profile is highlighted and click the Select Profile
        button.
      </p>
      <img
        style={imageStyle}
        src={r2modman_select_profile}
        alt="import update"
      />

      <p>Click the Online button on the left panel.</p>
      <img style={imageStyle} src={r2modman_online} alt="import update" />

      <p>
        Search for "Coffeeheim" in the search bar, click the modpack named
        Coffeeheim_S2_Required_Mods, and click the Download button.
      </p>
      <img
        style={imageStyle}
        src={r2modman_install_modpack}
        alt="install modpack"
      />

      <p>In the pop-up, click the Download with dependencies button.</p>
      <img
        style={imageStyle}
        src={r2modman_install_modpack2}
        alt="install modpack"
      />

      <p>
        Click the Start modded button in the top left to launch Valheim with the
        Season 2 modpack active.
      </p>
      <img style={imageStyle} src={r2modman_start_modded} alt="start modded" />

      <h2 className="font-semibold text-2xl">Optional Modpack Info</h2>
      <p>
        There is a second modpack on r2modman called
        "Coffeeheim_S2_Optional_Mods" that includes all the mods that are
        allowed but not required. Download the second modpack the same way as
        above and disable any of the optional mods you do not want to use. We
        don't recommend using them all at once.
      </p>
    </>
  )
}
