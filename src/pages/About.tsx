import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About RAAH
        </motion.h1>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Problem Statement</h2>
          <p className="text-muted-foreground">
            Students often disengage when problems (falling attendance, repeated
            attempts, declining test scores) surface late. Mentors need early
            detection of risk so they can intervene before small issues become
            critical.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">About Us</h2>
          <p className="text-muted-foreground">
            RAAH is a student risk detection dashboard that helps mentors
            monitor attendance, test scores, and attempts so they can prioritize
            outreach and provide timely support.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Guidelines for Mentors</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Regularly review student data on the dashboard.</li>
            <li>
              Pay special attention to high-risk students (low attendance,
              declining scores).
            </li>
            <li>Provide timely counseling & support before term-end exams.</li>
            <li>Encourage students to seek help early.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
