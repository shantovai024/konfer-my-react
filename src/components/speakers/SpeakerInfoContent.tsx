import AnimatedText from "../animation/AnimatedText";
import SocialV3 from "../social/SocialV3";
import skillProgressData from "../../assets/jsonData/skill/skillProgressData.json"
import SkillProgress from "../skill/SkillProgress";

interface DataType {
    name: string;
    designation: string;
    thumbFull: string;
}

const SpeakerInfoContent = ({ speakerInfo }: { speakerInfo: DataType }) => {
    const { name, thumbFull } = speakerInfo

    return (
        <>
            <section className="speaker-single">
                <div className="auto-container">
                    <div className="outer-box two">
                        <div className="row">
                            <div className="image-column col-xl-5 col-lg-12 col-md-12 col-sm-12">
                                <div className="inner-column">

                                    <div className="speaker-single-block">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <img src={`/images/resource/${thumbFull}`} alt="Image" />
                                                </figure>
                                            </div>
                                            <div className="content-box">
                                                <div className="team-shape">
                                                    <svg width={502} height={203} viewBox="0 0 502 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.5" d="M45 61.5919C45 56.1009 48.727 51.3105 54.0494 49.9603L248.049 0.748473C249.986 0.257271 252.014 0.257269 253.951 0.748472L447.951 49.9603C453.273 51.3105 457 56.101 457 61.5919V148C457 154.627 451.627 160 445 160H57C50.3726 160 45 154.627 45 148V61.5919Z" fill="#F5F5F5" />
                                                        <path opacity="0.5" d="M20 73.9203C20 68.3911 23.778 63.5776 29.1489 62.2639L248.149 8.69737C250.022 8.23921 251.978 8.23921 253.851 8.69737L472.851 62.2639C478.222 63.5776 482 68.3911 482 73.9203V169C482 175.627 476.627 181 470 181H32C25.3726 181 20 175.627 20 169V73.9203Z" fill="#F5F5F5" />
                                                        <path d="M0 86.5043C0 80.9697 3.78522 76.153 9.1629 74.8445L248.163 16.6903C250.027 16.2367 251.973 16.2367 253.837 16.6903L492.837 74.8445C498.215 76.153 502 80.9697 502 86.5043V191C502 197.627 496.627 203 490 203H12C5.37258 203 0 197.627 0 191V86.5043Z" fill="#150036" />
                                                    </svg>
                                                </div>
                                                <div className="shape-thirtynine" />
                                                <h4 className="name">{name}</h4>
                                                <div className="designation">Lead Speaker</div>
                                                <ul className="social-icons">
                                                    <SocialV3 />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="content-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="content-box">
                                        <div className="designation">Lead Speaker :--</div>
                                        <AnimatedText>
                                            {name}
                                        </AnimatedText>
                                        <div className="text">industry, group of productive enterprises or organizations that produce or supply goods, services, or sources of income. In economics, industries are generally classified as primary, secondary, tertiary, and quaternary; secondary industries are further classified as heavy and light. One of the most obvious and popular industries that need web content writing skills is marketing and advertising. </div>
                                        <div className="text">Whether you work for an agency, a brand, or as a freelancer, you'll be responsible for crafting compelling copy that persuades, educates, or entertains your target audience.</div>
                                    </div>
                                    <div className="author-box">
                                        <div className="author-info">
                                            <h5 className="title">Address :-</h5>
                                            <div className="text">3654 Washington Ave, Manchester, Kentucky 3657 </div>
                                        </div>
                                        <div className="author-info">
                                            <h5 className="title">Phone :-</h5>
                                            <div className="text">+36 3567 655 225</div>
                                        </div>
                                        <div className="author-info">
                                            <h5 className="title">Email :-</h5>
                                            <div className="text">example@gmail.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="outer-box">
                        <div className="row">
                            <div className="biography-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="content-box">
                                        <AnimatedText>
                                            Biography
                                        </AnimatedText>
                                        <div className="text">industry, group of productive enterprises or organizations that produce or supply goods, services, or sources of income. In economics, industries are generally classified as primary, secondary, tertiary, and quaternary; secondary industries are further classified as heavy and light. One of the most obvious and popular industries that need web content writing skills is marketing and advertising. </div>
                                        <div className="text">Whether you work for an agency, a brand, or as a freelancer, you'll be responsible for crafting compelling copy that persuades, educates, or entertains your target audience.</div>
                                        <div className="text">industry, group of productive enterprises or organizations that produce or supply goods, services, or sources of income. In economics, industries are generally classified as primary, secondary, tertiary, and quaternary; secondary industries are further classified as heavy and light. </div>
                                        <div className="text">One of the most obvious and popular industries that need web content writing skills is marketing and advertising.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="skills-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <AnimatedText>
                                        Skills
                                    </AnimatedText>

                                    <div className="skills">
                                        {skillProgressData.map(skill =>
                                            <SkillProgress skill={skill} key={skill.id} />
                                        )}
                                    </div>

                                    <div className="text">industry, group of productive enterprises or organizations that produce or supply goods, services, or sources of income. In economics, industries are generally classified as primary, secondary, tertiary, and quaternary; secondary industries are further classified as heavy and light. </div>
                                    <div className="text mb-0">One of the most obvious and popular industries that need web content writing skills is marketing and advertising.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SpeakerInfoContent;