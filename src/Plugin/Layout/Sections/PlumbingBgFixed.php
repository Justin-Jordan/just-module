<?php

namespace Drupal\just_mod\Plugin\Layout\Sections;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "plumbing_bg_fixed_section",
 *   label = @Translation("Plumbing bg fixed section"),
 *   category = @Translation("Plumbing Layout"),
 *   path = "layouts/sections",
 *   template = "plumbing_bg_fixed",
 *   library = "just_mod/plumbing_bg_fixed:
",
 * )
 */
class PlumbingBgFixed extends FormatageModelsSection
{
    /**
     *
     * {@inheritdoc}
     */
    public function defaultConfiguration()
    {
        return parent::defaultConfiguration();
    }
}
