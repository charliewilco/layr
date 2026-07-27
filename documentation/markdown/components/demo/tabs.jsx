import snippet from 'layr.css/src/components/layr.tabs.css?raw';

const onClick = e => e.preventDefault();

const Tabs = () => (
  <section className="c-Tabs">
    <nav className="c-Tabs__nav o-Flex u-w700" data-tabs>
      <a
        onClick={onClick}
        href="#tabA"
        data-tab
        className="c-Tabs__marker u-py2 u-px3 active">
        Buffalo Springfield
      </a>
      <a
        onClick={onClick}
        href="#tabB"
        data-tab
        className="c-Tabs__marker u-py2 u-px3">
        Early Solo Work
      </a>
      <a
        onClick={onClick}
        href="#tabC"
        data-tab
        className="c-Tabs__marker u-py2 u-px3">
        CSNY
      </a>
    </nav>
    <div className="c-Tabs__content u-p4" data-tabs-content>
      <div
        data-tabs-pane
        className="c-Tabs__pane active"
        id="tabA"
        data-tab-id="tabA">
        <h6>Buffalo Springfield</h6>
        <p>
          Once they reached Los Angeles, Young and Palmer met up with Stephen Stills,
          Richie Furay, and Dewey Martin to form Buffalo Springfield. A mixture of
          folk, country, psychedelia, and rock, lent a hard edge by the twin lead
          guitars of Stills and Young, made Buffalo Springfield a critical success,
          and their first record Buffalo Springfield (1966) sold well after Stills'
          topical song "For What It's Worth" became a hit, aided by Young's melodic
          harmonics played on electric guitar. According to Rolling Stone, the Rock
          and Roll Hall of Fame and other sources, Buffalo Springfield helped create
          the genres of folk rock and country rock.
        </p>
        <p>
          Distrust of their management, as well as the arrest and deportation of
          Palmer, exacerbated the already strained relations among the group members
          and led to Buffalo Springfield's demise. A second album, Buffalo
          Springfield Again, was released in late 1967, but two of Young's three
          contributions were solo tracks recorded apart from the rest of the group.
        </p>
        <p>
          In many ways, these three songs on Buffalo Springfield Again, "Mr. Soul",
          "Expecting to Fly", and "Broken Arrow", are harbingers of much of Young's
          later work in that, although they all share deeply personal, almost
          idiosyncratic lyrics, they also present three very different musical
          approaches to the arrangement of what is essentially an original folk song.
          "Mr. Soul" is the only Young song of the three that all five members of the
          group performed together. In contrast, "Broken Arrow" was confessional
          folk-rock of a kind that would characterize much of the music that emerged
          from the singer-songwriter movement. Young's experimental production
          intersperses each verse with snippets of sound from other sources,
          including opening the song with a soundbite of Dewey Martin singing "Mr.
          Soul" and closing it with the thumping of a heartbeat. "Expecting to Fly"
          was a lushly produced ballad similar to the baroque pop of the mid-1960s,
          featuring a string arrangement that Young's co-producer for the track, Jack
          Nitzsche, would dub "symphonic pop".
        </p>
        <p>
          In May 1968, the band split up for good, but to fulfill a contractual
          obligation, a final album, Last Time Around, was released, primarily from
          recordings made earlier that year. Young contributed the songs "On the Way
          Home" and "I Am a Child", singing lead on the latter. In 1997, the band was
          inducted into the Rock &amp; Roll Hall of Fame; Young did not appear at the
          ceremony. The three surviving members, Furay, Stills and Young, appeared
          together as Buffalo Springfield at Young's annual Bridge School Benefit on
          October 23–24, 2010, and at Bonnaroo in the summer of 2011.
        </p>
      </div>
      <div data-tabs-pane className="c-Tabs__pane" id="tabB" data-tab-id="tabB">
        <h6>Going solo, Crazy Horse</h6>
        <p>
          After the break-up of Buffalo Springfield, Young signed a solo deal with
          Reprise Records, home of his colleague and friend Joni Mitchell, with whom
          he shared a manager, Elliot Roberts, who manages Young to this day. Young
          and Roberts immediately began work on Young's first solo record, Neil Young
          (January 22, 1969), which received mixed reviews. In a 1970 interview,
          Young deprecated the album as being "overdubbed rather than played", and
          the quest for music that expresses the spontaneity of the moment has long
          been a feature of his career. Nevertheless, the album contains some songs
          that remain a staple of his live shows, most notably "The Loner".
        </p>
        <p>
          For his next album, Young recruited three musicians from a band called The
          Rockets: Danny Whitten on guitar, Billy Talbot on bass guitar, and Ralph
          Molina on drums. These three took the name Crazy Horse (after the
          historical figure of the same name), and Everybody Knows This Is Nowhere
          (May 1969), is credited to "Neil Young with Crazy Horse". Recorded in just
          two weeks, the album opens with one of Young's most familiar songs,
          "Cinnamon Girl", and is dominated by two more, "Cowgirl in the Sand" and
          "Down by the River", that feature improvisations with Young's distinctive
          electric guitar solos billowing out over the hypnotic Crazy Horse backing.
          Young reportedly wrote all three songs on the same day, while nursing a
          high fever of 103 °F (39 °C) in bed.
        </p>
      </div>
      <div data-tabs-pane className="c-Tabs__pane" id="tabC" data-tab-id="tabC">
        <h6>Crosby, Stills, Nash, and Young</h6>
        <p>
          Shortly after the release of Everybody Knows This Is Nowhere, Young
          reunited with Stephen Stills by joining Crosby, Stills &amp; Nash, who had
          already released one album Crosby, Stills &amp; Nash as a trio in May 1969.
          Young was originally offered a position as a sideman, but agreed to join
          only if he received full membership, and the group – winners of the 1969
          "Best New Artist" Grammy Award – was renamed Crosby, Stills, Nash &amp;
          Young. The quartet debuted in Chicago on August 16, 1969, and later
          performed at the famous Woodstock Festival, during which Young skipped the
          majority of the acoustic set and refused to be filmed during the electric
          set, even telling the cameramen: "One of you fuckin' guys comes near me and
          I'm gonna fuckin' hit you with my guitar". During the making of their first
          album, Déjà Vu (March 11, 1970), the musicians frequently argued,
          particularly Young and Stills, who both fought for control. Stills
          continued throughout their lifelong relationship to criticize Young, saying
          that he "wanted to play folk music in a rock band." Despite the tension,
          Young's tenure with CSN&amp;Y coincided with the band's most creative and
          successful period, and greatly contributed to his subsequent success as a
          solo artist.
        </p>
        <p>
          Young wrote "Ohio" following the Kent State massacre on May 4, 1970. The
          song was quickly recorded by CSN&amp;Y and immediately released as a
          single, even though CSN&amp;Y's "Teach Your Children" was still climbing
          the singles charts.
        </p>
      </div>
    </div>
  </section>
);

export { Tabs, snippet };
