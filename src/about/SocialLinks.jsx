import {
  faGithub,
  faInstagram,
  faThreads,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialItem from "./SocialItem";

function SocialLinks() {
  return (
    <section className="col-span-2">
      <div className="space-x-4 text-center text-xl md:space-x-8 md:text-3xl">
        <SocialItem href="https://github.com/YAcodingroom">
          <FontAwesomeIcon icon={faGithub} />
        </SocialItem>

        <SocialItem href="https://www.instagram.com/nt19_lya/">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialItem>

        <SocialItem href="https://www.threads.net/@nt19_lya">
          <FontAwesomeIcon icon={faThreads} />
        </SocialItem>

        <SocialItem href="https://twitter.com/YAL_9001">
          <FontAwesomeIcon icon={faXTwitter} />
        </SocialItem>

        <SocialItem href="https://vocus.cc/user/@YAL19">
          <FontAwesomeIcon icon={faBlog} />
        </SocialItem>
      </div>
    </section>
  );
}

export default SocialLinks;
