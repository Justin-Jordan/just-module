<?php

namespace Drupal\just_mod\Plugin\Layout\Sections;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "plumbing_svg_section",
 *   label = @Translation("Plumbing svg section"),
 *   category = @Translation("Plumbing Layout"),
 *   path = "layouts/sections",
 *   template = "plumbing_svg_section",
 *   library = "just_mod/plumbing_svg_section",
 * )
 */
class PlumbingSvgSection extends FormatageModelsSection
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
