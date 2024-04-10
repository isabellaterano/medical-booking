const SelfCheckup = () => {
  return (
    <section className="min-h-dvh">
      <div className="m-8">
        <h1 className="text-center font-bold text-3xl">Self Checkup</h1>
      </div>

      <div className="flex items-center justify-center flex-col lg:mx-12 p-8">
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Take your temperature
          </div>
          <div className="collapse-content">
            <p>
              Your body temperature can show if you might have a fever. Normal
              temperature for adults is around 37° C (98.6° F) but this will
              vary according to age, time of day and which part of the body you
              take the temperature from. Check it when you’re in good health so
              you know what’s normal for you. Invest in a good thermometer for
              the most accurate reading.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Checking your heart rate
          </div>
          <div className="collapse-content">
            <p>
              Your resting heart rate first thing in the morning gives an
              indication of your general wellness. What’s normal depends on your
              age and fitness — check every morning for a week to learn your
              usual pulse rate. You can check manually or with a heart rate
              monitor, fitness tracker or smartphone app.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Blood pressure
          </div>
          <div className="collapse-content">
            <p>
              High blood pressure is a major risk factor for strokes, heart
              attack, heart failure and kidney disease. Often there are no
              warning symptoms so checking your blood pressure regularly is
              vital. Blood pressure monitors are straightforward to use; just
              make sure you’re in a calm environment when you do the test.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">Skin check</div>
          <div className="collapse-content">
            <p>
              Skin cancer is one of the most common forms of cancer but you can
              screen yourself quite easily. Check yourself once a month, looking
              for new growths or moles that have changed or started to bleed,
              itch, burn or crust over. Speak to a doctor if you find these.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfCheckup;
